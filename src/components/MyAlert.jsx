import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

const MyAlert = function () {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert className="my-2 mx-2" show={show} variant="success">
        <Alert.Heading className=" text-center text-break">
          Benvenuti nella Biblioteca Virtuale: Dove le Parole prendono Vita!
        </Alert.Heading>
        <div className="">
          <p>
            📚 Esplora il Mondo della Conoscenza: Con un vasto assortimento di libri digitali, coprendo ogni argomento
            immaginabile, la nostra libreria è il tuo portale verso nuovi mondi, idee intriganti e avventure letterarie
            senza fine.
          </p>
          <p>
            💡 Illumina la Tua Mente: Dalla fantascienza alla filosofia, dalla storia alla narrativa contemporanea,
            offriamo un rifugio per le menti curiose. Ogni pagina è un invito a scoprire, imparare e connettersi con
            idee che trasformano.
          </p>
          <p>
            🌐 Accesso Universale: La nostra libreria è aperta a chiunque, ovunque tu sia. Esplora il nostro vasto
            catalogo da qualsiasi dispositivo e immergiti in un oceano di conoscenza senza limiti geografici.
          </p>
          <p>
            🚀 Il Futuro della Lettura è Qui: Unisciti a noi nel plasmare il futuro della lettura digitale. Naviga
            attraverso le nostre pagine interattive, scopri funzionalità avanzate e vivi la magia della lettura digitale
            come mai prima d'ora.
          </p>
          <hr />
          <p>
            Benvenuto nella Biblioteca Virtuale, dove ogni clic è un capitolo nuovo da scoprire. La tua avventura
            letteraria inizia ora!
          </p>
        </div>
        <div className="d-flex justify-content-center ">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me
          </Button>
        </div>
      </Alert>

      <div className="d-flex justify-content-center">
        {!show && (
          <Button className="my-2" onClick={() => setShow(true)}>
            Show Alert
          </Button>
        )}
      </div>
    </>
  );
};

export default MyAlert;
