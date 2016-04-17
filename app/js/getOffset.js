export function getOffsetTop(element, offset = 0) {
  if (element.tagName === 'BODY') {
    return offset;
  }
  offset += element.offsetTop;
  return getOffsetTop(element.parentNode, offset);
}

export function getOffsetLeft(element, offset = 0) {
  if (element.tagName === 'BODY') {
    return offset;
  }
  offset += element.offsetLeft;
  return getOffsetLeft(element.parentNode, offset);
}

export default function getOffset(element) {
  return {
    left: getOffsetLeft(element),
    top: getOffsetTop(element)
  };
}
