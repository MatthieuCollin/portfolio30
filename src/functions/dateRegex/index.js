// formate les dates au format voulu
export default function dateRegex(props) {
  if (props) {
    const formattedDate = props.split("T")[0];
    return formattedDate;
  }
}
