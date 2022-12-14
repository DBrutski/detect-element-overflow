import getNestedBoundingClientRect from 'get-nested-bounding-client-rect';

const getRect = (element) => getNestedBoundingClientRect(element);

const detectElementOverflow = (element, container) => ({
  get collidedTop() {
    return getRect(element).top < getRect(container).top;
  },
  get collidedBottom() {
    return getRect(element).bottom > getRect(container).bottom;
  },
  get collidedLeft() {
    return getRect(element).left < getRect(container).left;
  },
  get collidedRight() {
    return getRect(element).right > getRect(container).right;
  },
  get overflowTop() {
    return getRect(container).top - getRect(element).top;
  },
  get overflowBottom() {
    return getRect(element).bottom - getRect(container).bottom;
  },
  get overflowLeft() {
    return getRect(container).left - getRect(element).left;
  },
  get overflowRight() {
    return getRect(element).right - getRect(container).right;
  },
});

export default detectElementOverflow;
