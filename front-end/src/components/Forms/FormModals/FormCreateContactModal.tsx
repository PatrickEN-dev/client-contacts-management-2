import { ContactData } from "@/@types/contacts.types";
import { Button } from "@/components/Button";
import { UserContactsContext } from "@/contexts/contact/contactCrudContext";
import { contactsSchema } from "@/schemas/contacts.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";

export default function FormCreateContactModal() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ContactData>({ resolver: zodResolver(contactsSchema) });

  const { createContactRequest, closeModal } = useContext(UserContactsContext);

  const submit = () => {
    createContactRequest();
  };

  return (
    <section>
      <div>
        <h2>Novo contato</h2>
        <button onClick={closeModal}>X</button>
      </div>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <input
            type="text"
            placeholder="ex: Ana"
            {...register("first_name")}
          />
          <p>{errors.first_name?.message}</p>
        </div>

        <div>
          <input
            type="text"
            placeholder="ex: Julia"
            {...register("last_name")}
          />
          <p>{errors.last_name?.message}</p>
        </div>

        <div>
          <input
            type="mail"
            placeholder="ex: julia@mail.com"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
        </div>

        <div>
          <input
            type="tel"
            placeholder="ex: 14991335453"
            {...register("telephone")}
          />
          <p>{errors.telephone?.message}</p>
        </div>
        <Button type="submit">Criar</Button>
      </form>
    </section>
  );
}
