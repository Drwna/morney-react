import React from 'react';
import {NavLink, useParams} from 'react-router-dom';
import {useTags} from '../useTags';
import NotFound from './NotFound';


type Params = {
  id: string
}
const Label: React.FC = () => {
  const {findTag} = useTags();
  const {id} = useParams<Params>();
  let tag;
  if (id !== undefined) tag = findTag(parseInt(id));

  return (
    <div>
      {tag ? tag.name : <NavLink to="/"><NotFound/></NavLink>}
    </div>
  );
};

export {Label};
