/* eslint-disable react/display-name */
// We can't use .displayName until this is merged https://github.com/styleguidist/react-docgen-typescript/pull/449

import { forwardRef, type ComponentPropsWithoutRef } from "react";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  ComponentPropsWithoutRef<"textarea">
  // Make sure children are not passed down to an input, because this will result in error.
>(({ children: _children, ...props }, ref) => {
  return <textarea ref={ref} {...props} />;
});