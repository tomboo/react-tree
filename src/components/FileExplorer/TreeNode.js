import React from "react";
import {
  // FaFile,
  // FaFolder,
  // FaFolderOpen,
  FaChevronDown,
  FaChevronRight
} from "react-icons/fa";
import styled from "styled-components";
// import last from 'lodash/last';
import PropTypes from "prop-types";
// import { ResourceType } from "./mock-data";

const getPaddingLeft = (level, type) => {
  let paddingLeft = level * 20;
  // if (type === ResourceType.TASK) paddingLeft += 20;
  return paddingLeft;
};

const StyledTreeNode = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 8px;
  padding-left: ${props => getPaddingLeft(props.level, props.type)}px;
  &:hover {
    background: lightgray;
  }
`;

const NodeIcon = styled.div`
  font-size: 12px;
  margin-right: ${props => (props.marginRight ? props.marginRight : 5)}px;
`;

function getNodeLabel(node) {
  return node.name;
}

// TreeNode Component
function TreeNode(props) {
  const { node, level, selected, onSelect, onToggle } = props;
  console.log("TreeNode");
  console.log(props);

  return (
    <React.Fragment>
      <StyledTreeNode level={level} type={node.resource_type}>
        {/* Node open/closed icon (clickable) */}
        <button onClick={onToggle}>
          {level}
          {node.isOpen() ? <FaChevronDown /> : <FaChevronRight />}
        </button>

        {/* Node Label (selectable) */}
        <button onClick={onSelect}>
          {getNodeLabel(node)}
        </button>

        {/* Child Count */}
        <span>({node.getChildCount()})</span>

        {/* Selection */}
        {selected && <span>*</span>}
      </StyledTreeNode>
    </React.Fragment>
  );
}

TreeNode.propTypes = {
  node: PropTypes.object.isRequired,
  level: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired
};

TreeNode.defaultProps = {
  level: 0
};

export default TreeNode;
