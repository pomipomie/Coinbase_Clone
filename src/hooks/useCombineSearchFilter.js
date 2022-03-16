import { useState, useEffect } from 'react';

const useCombineSearchFilter = (searchResult, filterResult, key) => {
  const [searchFilterResult, setSearchFilterResult] = useState(searchResult);

  const getSharedItems = (array1, array2, key) => {
    let sharedItems = [];
    array1.forEach((item1) => {
      if (array2.some((item2) => item1[key] === item2[key]))
        sharedItems.push(item1);
    });
    return sharedItems;
  };

  //FIXME: Terminal warning "React Hook useEffect has a missing dependency: 'key'."
  useEffect(() => {
    const sharedItems = getSharedItems(searchResult, filterResult, key);
    setSearchFilterResult(sharedItems);
  }, [searchResult, filterResult]);

  return { searchFilterResult };
};

export default useCombineSearchFilter;
