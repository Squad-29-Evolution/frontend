import S from "./style";
import Orange from "../../assets/logo_orange.svg";
import Link from "../../assets/link.svg";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import api from "../../api";
import Loading from "../../components/Loading";
import useAuth from "../../hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import Header from "../../components/Header";

const Content = () => {
  const { id, trail_id } = useParams();
  const { authUser, getUserInfo } = useAuth();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [concluded, setConcluded] = useState(false);
  const [icon, setIcon] = useState(Orange);
  const { token } = authUser;
  const user = getUserInfo();

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const notify = (type, message) =>
    toast[type](message, {
      position: "bottom-left",
      autoClose: 1500,
      hideProgressBar: false,
      newestOnTop: false,
      closeOnClick: true,
      rtl: false,
      pauseOnFocusLoss: true,
      draggable: false,
      pauseOnHover: true,
      theme: "dark",
    });

  useEffect(() => {
    async function getResponse() {
      setIsLoading(true);

      const concludedCourses = await api.get(
        `/getallconcludedcourse/${user.id}&${trail_id}`,
        config,
      );

      const contentData = await api.get(`/contents/${id}`);

      //console.log(concludedCourses.data);
      //console.log(contentData.data);

      concludedCourses.data.map((item) => {
        if (item.contentsId == id) {
          setConcluded(true);
        }
      });

      setTitle(contentData.data.title);
      setDescription(contentData.data.description);
      setLink(contentData.data.link);
      setIsLoading(false);
      setIcon(contentData.data.trail?.icon);
    }

    getResponse();
  }, []);

  const setConcludedContent = async () => {
    try {
      await api.post(
        "/salveconcludedcourse",
        {
          user_id: user.id,
          trail_id: parseInt(trail_id),
          content_id: parseInt(id),
        },
        config,
      );

      notify("success", "Concluído com sucesso");
      return setConcluded(true);
    } catch (error) {
      console.log(error);
      notify("error", "Ocorreu um erro ao salvar curso");
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <S.Container>
      <Header />
      <ToastContainer />
      <S.Header>
        <S.Img src={icon} />
        <S.Title>{title}</S.Title>
      </S.Header>
      <S.Content>
        <S.TitleDescription>Introdução</S.TitleDescription>
        <S.Description>{description}</S.Description>
        <S.Table>
          <thead>
            <S.TRTable>
              <S.HeaderTable>Links</S.HeaderTable>
            </S.TRTable>
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
          concluded={concluded}
        >
          <S.TextButtonConcluded>
            {concluded == true ? "Já concluído" : "Concluído"}
          </S.TextButtonConcluded>
        </S.ButtonConcluded>
      </S.Content>
    </S.Container>
  );
};

export default Content;
