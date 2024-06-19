import { ChangeEvent, useEffect, useState } from "react";
import "./HomePage.css";
import { axiosRequest } from "src/components/api";
import { Client } from "src/components/types";

export const HomePage = () => {
  const [dataClients, setDataClients] = useState<Client[]>([]);
  const handleStatusChange = async (index: number, value: string) => {
    try {
      const updatedClients = [...dataClients];
      updatedClients[index].status = value;
      setDataClients(updatedClients);
      const data = await axiosRequest.patch(
        //@ts-ignore

        `/changeStatus/${updatedClients[index]._id}`,
        {
          status: value,
        }
      );
      console.log(data);
    } catch (error) {
      console.error("Ошибка при обновлении статуса клиента:", error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axiosRequest.get("/");
        setDataClients(data.clientsData);
        console.log(data.clientsData);
      } catch (error) {
        console.error("Ошибка при запросе данных:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="homePage">
      <h3>Таблица ваших клиетов</h3>
      <table>
        <thead>
          <tr>
            <th>Номер счета</th>
            <th>ФИО</th>
            <th>Дата рождения</th>
            <th>ИНН</th>
            <th>Статус</th>
          </tr>
        </thead>
        <tbody>
          {dataClients.map((client, index) => (
            <tr key={index}>
              <td>{client.accountNumber}</td>
              <td>{`${client.surname} ${client.name} ${client.patronymic}`}</td>

              <td>{client.dateOfBirth}</td>
              <td>{client.inn}</td>
              <td>
                <select
                  value={client.status}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    handleStatusChange(index, e.target.value)
                  }
                >
                  {["Не в работе", "В работе", "Отказ", "Сделка закрыта"].map(
                    (option, optionIndex) => (
                      <option key={optionIndex} value={option}>
                        {option}
                      </option>
                    )
                  )}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
