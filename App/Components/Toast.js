import { useMemo } from 'react';
import { useToast as useBaseToast } from 'native-base';
import AlertMessage from './AlertMessage';

export const useToast = () => {
  const baseToast = useBaseToast();

  const toast = useMemo(() => ({
    show: ({type, title, delay = 0, ...props}) => {
      let showFunc = () => {
        baseToast.show({
          render: () => {
            return (
              <AlertMessage type={type} message={title} />
            );
          },
          avoidKeyboard: true,
          duration: 3000,
          ...props,
        });
      }

      if (delay <= 0) {
        return showFunc();
      }

      setTimeout(() => {
        showFunc();
      }, delay);
    },
  }), []);

  return toast;
};