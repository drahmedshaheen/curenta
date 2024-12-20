import type { ReactNode } from 'react';

type Props<TInput, TOutput extends TInput> =
  | {
      value: TInput;
      if: (value: TInput) => value is TOutput;
      children: (value: TOutput) => ReactNode;
      else?: ReactNode;
    }
  | {
      if: boolean;
      children: ReactNode;
      else?: ReactNode;
    };

const Show = <TInput, TOutput extends TInput>(
  props: Props<TInput, TOutput>
) => {
  if (typeof props.if === 'function') {
    if (!props.if(props.value)) return props.else ? props.else : null;
    return props.children(props.value);
  }

  if (!props.if) return props.else ? props.else : null;
  return props.children;
};

export { Show };
