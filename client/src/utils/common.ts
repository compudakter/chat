export const getBlockClass = (element: string, blockName?: string) =>
  blockName ? `${blockName}__${element}` : "";
