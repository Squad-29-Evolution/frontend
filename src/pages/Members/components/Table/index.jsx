import S from "./style";

const Table = ({ data }) => {
  const setDate = (date) => {
    const dateNotFormat = new Date(date);
    const day = dateNotFormat.getDate();
    const year = dateNotFormat.getFullYear(),
      monthNames = [
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Mai",
        "Jun",
        "Jul",
        "Ago",
        "Set",
        "Out",
        "Nov",
        "Dez",
      ];

    return `${day}  ${monthNames[dateNotFormat.getMonth()]}, ${year}`;
  };

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
          {data.length > 0 ? (
            data.map((user) => (
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
                  <S.Btext>
                    {user.Dates[0]?.date
                      ? setDate(user.Dates[0]?.date)
                      : "Sem atividade"}
                  </S.Btext>
                </S.BContent>
              </S.BRow>
            ))
          ) : (
            <S.NotUsers>
              <p>Não foi encontrado nenhum usuário</p>
            </S.NotUsers>
          )}
        </S.Body>
      </S.Table>
    </S.ContainerOverFlow>
  );
};

export default Table;
