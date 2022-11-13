import S from "./style";

const Table = ({ data }) => {
  console.log();
  return (
    <S.ContainerOverFlow>
      <S.Table>
        <S.Header>
          <S.HRow>
            <S.Htext>Nome</S.Htext>
          </S.HRow>

          <S.HRow>
            <S.Htext>Cargo</S.Htext>
          </S.HRow>

          <S.HRow>
            <S.Htext>Última atividade</S.Htext>
          </S.HRow>
        </S.Header>

        <S.Body>
          {data.map((user) => (
            <S.BRow key={user.id}>
              <S.BContent className="flexStart">
                <S.ContentPicture>
                  <img src={user.picture} alt="g" />
                </S.ContentPicture>
                <S.ContentInfo>
                  <S.Btext>{user.name}</S.Btext>
                  <S.Span>{user.email}</S.Span>
                </S.ContentInfo>
              </S.BContent>

              <S.BContent className="middle">
                <S.Btext>{user.role}</S.Btext>
              </S.BContent>

              <S.BContent>
                <S.Btext>6 Out, 2022</S.Btext>
              </S.BContent>
            </S.BRow>
          ))}
        </S.Body>
      </S.Table>
    </S.ContainerOverFlow>
  );
};

export default Table;
