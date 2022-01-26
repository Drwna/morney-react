import React, {useEffect, useRef} from 'react';

/**
 * 避免 setItem 两次
 * @param fn
 * @param deps
 */
const useUpdate = (fn: () => void, deps: any[]) => {
  const count = useRef(0);
  useEffect(() => {
    count.current += 1;
  });

  useEffect(() => {
    if (count.current > 1) {
      fn();
    }
  }, [deps]); // 不可变数据 也就是每次的 tags 都是新的对象
};

export {useUpdate};
