// types
import { IAddress } from "@/types";
// cmp
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import NoData from "@/components/shared/NoData";
import EditAddress from "./EditAddress";

const AddressesList = ({ addresses }: { addresses: IAddress[] }) => {
  if (!addresses?.length)
    return (
      <Card>
        <NoData
          title="No addresses found!"
          subText="It looks like you have not add any addresses yet"
        />
      </Card>
    );

  const tableRows = addresses.map((a) => ({
    key: a._id,
    fullName: a.fullName,
    location: `${a.street}, ${a.state}, ${a.city}, ${a.country}`,
    phone: a.phone,
    postalCode: a.postalCode,
    actions: (
      <div className="flex items-center gap-1">
        <EditAddress id={a._id} />
      </div>
    ),
    isDefalt: a.isDefault ? <Badge variant="green">Default</Badge> : null,
  }));

  return (
    <section className="tableContainer">
      <Table>
        <TableBody>
          {tableRows.map((item) => (
            <TableRow key={item.key}>
              <TableCell className="min-w-[200px]">{item.fullName}</TableCell>
              <TableCell className="min-w-[250px]">{item.location}</TableCell>
              <TableCell className="min-w-[100px]">{item.phone}</TableCell>
              <TableCell className="min-w-[100px]">{item.postalCode}</TableCell>
              <TableCell className="min-w-[100px]">{item.actions}</TableCell>
              <TableCell className="min-w-[100px]">{item.isDefalt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default AddressesList;
