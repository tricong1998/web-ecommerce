import { IconProps } from '../icon';
import { Svg } from './svg';

export function IconChevronDown({ className, ...rest }: IconProps) {
  return (
    <Svg className={className} {...rest} width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path
        fill="currentcolor"
        d="M19.53 8.22c.267.266.29.683.073.976l-.073.084-7 7c-.266.267-.683.29-.976.073l-.084-.073-7-7c-.293-.293-.293-.767 0-1.06.266-.267.683-.29.976-.073l.084.073L12 14.689l6.47-6.47c.266-.266.683-.29.976-.072l.084.073z"
      />
    </Svg>
  );
}

export function ChevronRightIcon({ className, ...rest }: IconProps) {
  return (
    <Svg className={className} {...rest} width="16" height="17" fill="none" viewBox="0 0 16 17">
      <path
        fill="currentcolor"
        d="M5.47 2.812c.266-.267.683-.29.976-.073l.084.073 5 5c.267.266.29.683.073.976l-.073.084-5 5c-.293.293-.767.293-1.06 0-.267-.266-.29-.683-.073-.976l.073-.084 4.469-4.47-4.47-4.47c-.266-.266-.29-.683-.072-.976l.073-.084z"
      />
    </Svg>
  );
}
