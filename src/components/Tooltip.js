import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";

import defaultTheme from "../theme/defaultTheme";

import TooltipWrap from "../styled/TooltipWrap";
import { Wrap } from "../styled/Wrap";
import { BottomArrow } from "../styled/BottomArrow";
import { BottomArrowOverlap } from "../styled/BottomArrowOverlap";
import { TopArrow } from "../styled/TopArrow";
import { TopArrowOverlap } from "../styled/TopArrowOverlap";
import { LeftArrow } from "../styled/LeftArrow";
import { LeftArrowOverlap } from "../styled/LeftArrowOverlap";
import { RightArrow } from "../styled/RightArrow";
import { RightArrowOverlap } from "../styled/RightArrowOverlap";

class Tooltip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.getArrow = this.getArrow.bind(this);
    this.getArrowOverlap = this.getArrowOverlap.bind(this);
  }

  onMouseEnter(e) {
    this.setState({
      visible: true
    });
  }

  onMouseMove(e) {
    this.setState({
      visible: true
    });
  }

  onMouseOut(e) {
    this.setState({
      visible: false
    });
  }

  getPropsByPosition(position) {
    switch (position) {
      case "left":
        return {
          right: "calc(100% + 13px)",
          top: "50%",
          transform: "translateY(-50%)"
        };
      case "right":
        return {
          left: "calc(100% + 13px)",
          top: "50%",
          transform: "translateY(-50%)"
        };
      case "top":
        return {
          left: "50%",
          bottom: "calc(100% + 13px)",
          transform: "translateX(-50%)"
        };
      case "bottom":
        return {
          left: "50%",
          top: "calc(100% + 13px)",
          transform: "translateX(-50%)"
        };
      default:
        return { left: "100%", top: "50%" };
    }
  }

  getArrow(position) {
    switch (position) {
      case "left":
        return <RightArrow />;
      case "right":
        return <LeftArrow />;
      case "top":
        return <BottomArrow />;
      case "bottom":
        return <TopArrow />;
      default:
        return <RightArrow />;
    }
  }

  getArrowOverlap(position) {
    switch (position) {
      case "left":
        return <RightArrowOverlap />;
      case "right":
        return <LeftArrowOverlap />;
      case "top":
        return <BottomArrowOverlap />;
      case "bottom":
        return <TopArrowOverlap />;
      default:
        return <RightArrowOverlap />;
    }
  }

  render() {
    const { position, children, content, theme, ...otherProps } = this.props;

    return (
      <Wrap
        theme={theme}
        {...otherProps}
        onMouseMove={this.onMouseMove}
        onMouseEnter={this.onMouseEnter}
        onMouseOut={this.onMouseOut}
      >
        <TooltipWrap
          theme={theme}
          visible={this.state.visible}
          {...this.getPropsByPosition(position)}
        >
          {this.getArrow(position)}
          {this.getArrowOverlap(position)}
          {content}
        </TooltipWrap>
        {children}
      </Wrap>
    );
  }
}

Tooltip.propTypes = {
  theme: PropTypes.object,
  position: PropTypes.oneOf(['left', 'right', 'bottom', 'top']),
  content: PropTypes.any.isRequired
};

Tooltip.defaultProps = {
  theme: defaultTheme,
  position: 'bottom'
};

export default withTheme(Tooltip);
