import React from 'react';
import Form from './Form';

export default function GrupoBContainer (props) {

  return (
    <div>
      {/*<Form productoId='5f2d72976b03f9cecbe30204' />*/}
      {/*<Form productoId={props.match.params.id} />*/}
      <Form productoId={props.location.search.slice(4)}/>
    </div>
  )

};
