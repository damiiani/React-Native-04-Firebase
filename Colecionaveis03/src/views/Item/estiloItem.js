import { StyleSheet } from 'react-native';

const estiloItem = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#92afd7',
  },
  header: {
    height: 50,
    backgroundColor: '#14417b',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
  },
  formularioContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  texto: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  campoContainer: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 50,
    margin: 5,
    marginRight: 50,
    alignItems: 'center',
  },
  campoContainerDescricao: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingRight: 40,
    paddingLeft: 45,
    paddingHorizontal: 50,
    margin: 5,
  },
  campo: {
    width: '100%',
    fontSize: 18,
    color: '#ffffff',
    backgroundColor: '#4c669f',
    marginLeft: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#192f6a',
    borderRadius: 5,
  },
  campoDescricao: {
    width: '90%',
    height: 100,
    fontSize: 18,
    color: '#ffffff',
    backgroundColor: '#4c669f',
    marginLeft: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#192f6a',
    borderRadius: 5,
    textAlignVertical: 'top',
  },
  campoDescricaoScroll: {
    width: '100%',
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 50,
  },
  botaoContainer: {
    alignItems: 'center',
    padding: 5,
  },
  botao: {
    width: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});

export default estiloItem;
