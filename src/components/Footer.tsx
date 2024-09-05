import { footerProps } from "@lib/types";

export default function Footer(props:footerProps) {
  return (
    <div>
      <p>Copyright © {props.year} {props.fullName} {props.studentId}</p>
    </div>
  );
}
