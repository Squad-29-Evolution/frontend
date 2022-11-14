import {
  Page,
  Text,
  Svg,
  G,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  document: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    height: "100vh",
    width: "100vw",
    color: "#ccc",
  },

  left: {
    width: "30%",
    height: "100%",
    backgroundColor: "#FF5A23",
  },

  right: {
    width: "70%",
    height: "100%",
    backgroundColor: "#2E2E2E",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },

  header: {
    height: "25%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  titleHeader: {
    fontSize: 25,
    fontWeight: "bold",
  },

  body: {
    height: "50%",
    width: "70%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },

  textDestaque: {
    fontWeight: "bold",
  },

  textName: {
    fontSize: 30,
    fontWeight: "black",
    marginTop: 20,
    marginBottom: 20,
  },

  footer: {
    height: "25%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Certificate = (props) => {
  return (
    <Document>
      <Page orientation="landscape" size={"EXECUTIVE"} style={styles.document}>
        <View style={styles.left} />
        <View style={styles.right}>
          <View style={styles.header}>
            <Text style={styles.titleHeader}>Certificado de Conclusão</Text>
          </View>
          <View style={styles.body}>
            <Text>
              A <Text style={styles.textDestaque}>Orange Evolution</Text>{" "}
              certifica que
            </Text>
            <Text style={styles.textName}>{props.name.toUpperCase()}</Text>
            <Text>
              concluiu com êxito a trilha{" "}
              <Text style={styles.textDestaque}>{props.trail}</Text>, com um
              total de{" "}
              <Text style={styles.textDestaque}>{props.hours} horas</Text>.
            </Text>
          </View>
          <View style={styles.footer}>
            <Text style={styles.textDestaque}>Orange Evolution</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default Certificate;
