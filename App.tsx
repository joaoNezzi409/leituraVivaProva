import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

const Livros = [
  { id: '1', title: 'Dom Casmurro', author: 'Machado de Assis' },
  { id: '2', title: 'Memórias Póstumas de Brás Cubas', author: 'Machado de Assis' },
  { id: '3', title: 'Grande Sertão: Veredas', author: 'João Guimarães Rosa' },
  { id: '4', title: 'Vidas Secas', author: 'Graciliano Ramos' },
  { id: '5', title: 'A Hora da Estrela', author: 'Clarice Lispector' },
  { id: '6', title: 'Capitães da Areia', author: 'Jorge Amado' },
  { id: '7', title: 'O Cortiço', author: 'Aluísio Azevedo' },
  { id: '8', title: 'Iracema', author: 'José de Alencar' },
  { id: '9', title: 'Macunaíma', author: 'Mário de Andrade' },
  { id: '10', title: 'O Primo Basílio', author: 'Eça de Queirós' },
  { id: '11', title: 'O Quinze', author: 'Rachel de Queiroz' },
  { id: '12', title: 'Triste Fim de Policarpo Quaresma', author: 'Lima Barreto' },
  { id: '13', title: 'Torto Arado', author: 'Itamar Vieira Junior' },
  { id: '14', title: 'O Auto da Compadecida', author: 'Ariano Suassuna' },
  { id: '15', title: 'Quarto de Despejo', author: 'Carolina Maria de Jesus' },
];

export default function App() {
  const [searchText, setSearchText] = useState('');

  const filteredLivros = Livros.filter((livro) =>
    livro.title.toLowerCase().includes(searchText.toLowerCase()) ||
    livro.author.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Container>
      <Header>
        <Title>LeituraViva</Title>
        <Subtitle>Library Loan System</Subtitle>
      </Header>

        <ContainerInput>
          <Input
            placeholder="  Search books by title or author..."
            value={searchText}
            onChangeText={setSearchText}
          />
        </ContainerInput>
        
        <ContainerBooks>
          <FlatList
            data={filteredLivros}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <BookItem>
                <BookInfo>
                  <BookName>{item.title}</BookName>
                  <BookAuthor>{item.author}</BookAuthor>
                </BookInfo>
              </BookItem>
            )}
          />
        </ContainerBooks>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  padding: 10px 0px 0px 0px;
  background-color: #444edd;
`;

const Header = styled.View`
  padding: 20px;
`;

const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  align-self: center;
`;

const Subtitle = styled.Text`
  font-size: 18px;
  margin-bottom: 10px;
  align-self: center;
`;

const ContainerBooks = styled.View`
  background-color: #d8d7d7;
  padding: 10px;
`;

const ContainerInput = styled.View`
  padding: 10px;
  background-color: #999898;
  border-radius: 18px 18px 0 0;
`;

const Input = styled.TextInput`
  height: 40px;
  border-color: #cccccc;
  background-color: #ffffff;
  border-width: 1px;
  margin-bottom: 10px;
  padding: 0 10px;
  border-radius: 30px;
`;

const BookItem = styled.View`
  
`;

const BookInfo = styled.View`
padding: 15px;
  border-bottom-color: #eeeeee;
  background-color: #ffffff;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 8px;
`;

const BookName = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const BookAuthor = styled.Text`
  font-size: 14px;
  color: #666666;
`;

