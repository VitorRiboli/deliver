import "./styles.css"

type Props = {
  message: string;
}

export default function Button ( { message } : Props ) {
  return (
    <button className="button-primary">{message}</button>
  )
}