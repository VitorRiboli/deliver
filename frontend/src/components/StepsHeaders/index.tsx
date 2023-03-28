import "./styles.css";

export default function StepsHeaders() {
  return (
    <div className="stepheader-container">
      <main className="step-container">
        <h2 className="step-title">
          SIGA AS <br /> ETAPAS
        </h2>
        <div className="step-subtitle">
          <h4>
            <span>1 </span>Selecione os produtos e localização.
          </h4>
          <h4>
            <span>2 </span>Depois clique em <strong>"ENVIAR PEDIDO"</strong>.
          </h4>
        </div>
        <div className="step-card">Pedido enviado com sucesso! Nº 5</div>
      </main>
    </div>
  );
}
