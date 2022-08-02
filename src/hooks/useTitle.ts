import { useCallback, useMemo } from 'react';

import Config from 'Config';

type UseTitleType = () => (title?: string | undefined) => void;

const useTitle: UseTitleType = () => {
  const setTitle = useCallback((title?: string) => {
    const appName = Config.appName ?? '';

    if (title) {
      document.title = `${title} | ${appName}`;
    } else {
      document.title = appName;
    }
  }, []);

  return useMemo(() => setTitle, [setTitle]);
};

export default useTitle;
