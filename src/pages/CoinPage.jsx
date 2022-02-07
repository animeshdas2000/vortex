import React from 'react';
import { useParams } from 'react-router-dom';

function CoinPage() {
    let params = useParams();
    const id = params.symbl;
  return (
  <div>
      coin id :{id}
    
  </div>
  );
}

export default CoinPage;
