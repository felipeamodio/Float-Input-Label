import React, {useState, useCallback, useRef} from 'react';

import * as S from './styles';

export default function Home() {
    const [name, setName] = useState('');

  return (
    <S.Container>
        <S.Title>Fomulário</S.Title>
        <S.Input 
            placeholder="Seu nome"
            placeholderTextColor="#8758FF"
            autoCaptalize="words"
            value={name}
            onChangeText={(text) => setName(text)}
        />
    </S.Container>
  );
}