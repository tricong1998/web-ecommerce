import { SVGProps } from 'react';

export function Svg(props: SVGProps<SVGSVGElement>) {
  return <svg xmlns="http://www.w3.org/2000/svg" {...props} />;
}
