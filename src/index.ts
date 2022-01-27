const idUnique = () => {
  const data = new Date();

  const date = new Intl.DateTimeFormat('pt-BR');
  const time = data.toLocaleTimeString();

  const dateReplace = date.format(data).replace(/[/"]/g, '');
  const timeReplace = time.replace(/[:"]/g, '');

  const textRandom = Math.random().toString(36).substring(8, 10);

  const numberMath = String(Math.floor(Math.random() * 9000)).substring(0, 2);

  const resultConcat = numberMath + textRandom;

  const mixCaracter = resultConcat.split('').sort(() => Math.random()).join('');

  const result = `${dateReplace}-${timeReplace}-${mixCaracter.padStart(4, '0')}`;

  return result;
};

export { idUnique };
