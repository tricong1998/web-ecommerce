import * as React from 'react';
import { NotificationProps } from 'src/components';

export type ToastMessage = Pick<NotificationProps, 'message' | 'description'> & {
  src?: string;
  icon?: React.ElementType;
  restorationTime?: number;
};

export const useToast = (defaultToast?: ToastMessage) => {
  const [toast, setToast] = React.useState(defaultToast);
  return { toast, setToast };
};
