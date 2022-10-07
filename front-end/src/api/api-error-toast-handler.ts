import { toast } from "react-toastify";

export function apiErrorToastHandler() {
  return (error: Error) => {
    let content = 'Ocorreu um erro ao processar a sua requisição.';
    if (error.message) content += ` ${error.message}`;
    toast(content, {
      type: 'error',
    });
  };
}
