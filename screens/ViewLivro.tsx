import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import axios from 'axios';

export default function ViewLivro({ route }) {
  const { id } = route.params;
  const [livro, setLivro] = useState(null);

  useEffect(() => {
    fetchLivro();
  }, []);

  const fetchLivro = async () => {
    try {
      const response = await axios.get(`https://bibliotecaetecmaua.azurewebsites.net/api/LivrosSedeApi/${id}`);
      console.log(response.data)
      setLivro(response.data);
    } catch (error) {
      console.error("Erro ao buscar livro testando:", error);
    }
  };

  return (
    <View>
      {livro && (
        <>
          <div style={style.container}>
            <div style={style.card}>
              <div style={style.texto}>
                <div style={style.descricao}>
                  <Text style={style.titulo}>{livro.titulo}</Text>
                  <Text style={style.ano}>
                    Lançamento: {livro.ano}
                  </Text>
                </div>
                <div style={style.informacoes}>
                  <Text>
                    <Text style={{ fontWeight: 'bold' }}>Assuntos: </Text>{livro.assuntos}
                  </Text>
                  <Text>
                    <Text style={{ fontWeight: 'bold' }}>Editora: </Text>{livro.editora}
                  </Text>
                  <Text>
                    <Text style={{ fontWeight: 'bold' }}>Autor Principal: </Text>{livro.autorPrincipal}
                  </Text>
                  <Text>
                    <Text style={{ fontWeight: 'bold' }}>Autores: </Text>{livro.autores}
                  </Text>
                  <Text>
                    <Text style={{ fontWeight: 'bold' }}>Edição: </Text>{livro.edicao}
                  </Text>
                  <Text>
                    <Text style={{ fontWeight: 'bold' }}>Editora: </Text>{livro.editora}
                  </Text>
                  <Text>
                    <Text style={{ fontWeight: 'bold' }}>Id: </Text>{livro.id}
                  </Text>
                  <Text>
                    <Text style={{ fontWeight: 'bold' }}>Idioma: </Text>{livro.idioma}
                  </Text>
                  <Text>
                    <Text style={{ fontWeight: 'bold' }}>ISBN/ISSN: </Text>{livro.isbnIssn}
                  </Text>
                  <Text>
                    <Text style={{ fontWeight: 'bold' }}>Material: </Text>{livro.material}
                  </Text>
                  <Text style={{ marginBottom: 15 }}>
                    <Text style={{ fontWeight: 'bold' }}>Obra: </Text>{livro.obra}
                  </Text>
                </div>
              </div>
              <Image resizeMode='center' source={{ uri: `https://bibliotecaetecmaua.azurewebsites.net/Content/Images/${livro.imagem}` }} style={{ width: 200, height: 200 }} />
            </div>
          </div>
        </>
      )}
    </View>
  );
}

const style = StyleSheet.create(
  {
    container: {
      width: "50%",
      margin: "auto",
      minWidth: 350,
      fontFamily: "Arial"
    },
    card: {
      backgroundColor: "white",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
    },
    texto: {
      display: "flex",
      flexDirection: "column",
      marginLeft: 10
    },
    descricao: {
      marginBottom: 30,
      display: 'flex',
      flexDirection: 'column'
    },
    titulo: {
      fontWeight: "bold",
      fontSize: 30
    },
    ano: {
      color: "gray",
      fontSize: 12
    },
    informacoes: {
      display: 'flex',
      flexDirection: "column",
      gap: 10
    }
  }
);
