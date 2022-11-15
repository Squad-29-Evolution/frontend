import S from "./style";
import Code from "../../assets/code.svg";
import Link from "../../assets/link.svg";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import api from "../../api";
import Loading from "../../components/Loading";
import useAuth from "../../hooks/useAuth";

const Content = () => {
  const { id, trail_id } = useParams();
  const { authUser, getUserInfo } = useAuth();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [concluded, setConcluded] = useState(false);
  const { token } = authUser;
  const user = getUserInfo();

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  useEffect(() => {
    async function getResponse() {
      setIsLoading(true);

      const concludedCourses = await api.get(
        `/getallconcludedcourse/${user.id}&${trail_id}`,
        config,
      );
      const contentData = await api.get(`/contents/${id}`);

      console.log(concludedCourses.data);
      console.log(contentData.data);

      concludedCourses.data.map((item) => {
        if (item.contentsId == id) {
          setConcluded(true);
        }
      });

      setTitle(contentData.data.title);
      setDescription(contentData.data.description);
      setLink(contentData.data.link);
      setIsLoading(false);
    }

    getResponse();
  }, []);

  const setConcludedContent = async () => {
    try {
      await api.post(
        "/salveconcludedcourse",
        {
          user_id: user.id,
          trail_id: trail_id,
          content_id: id,
        },
        config,
      );

      console.log("clicou");
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <S.Container>
      <S.Header>
        <S.Img src={Code} />
        <S.Title>{title}</S.Title>
      </S.Header>
      <S.Content>
        <S.TitleDescription>Introdução</S.TitleDescription>
        <S.Description>{description}</S.Description>
        <S.Table>
          <thead>
            <tr>
              <S.HeaderTable>Links</S.HeaderTable>
            </tr>
          </thead>
          <tbody>
            <tr>
              <S.ContentTable>
                <S.ImgLink src={Link} alt="Ícone de link" />
                <S.TextContentTable href={link} target={"_blank"}>
                  {link}
                </S.TextContentTable>
              </S.ContentTable>
            </tr>
          </tbody>
        </S.Table>

        <S.ButtonConcluded
          onClick={setConcludedContent}
          disabled={concluded == true ? true : false}
        >
          <S.TextButtonConcluded>Concluído</S.TextButtonConcluded>
        </S.ButtonConcluded>
      </S.Content>
    </S.Container>
  );
};

export default Content;
