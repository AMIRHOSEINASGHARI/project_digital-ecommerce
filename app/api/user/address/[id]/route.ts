// next
import { NextRequest, NextResponse } from "next/server";
// actions
import { checkCustomer } from "@/actions/shared.actions";
// lib
import { errorMessage } from "@/lib/functions";
// models
import { AddressModel } from "@/models";
// types
import { IAddress } from "@/types";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { error } = await checkCustomer();
    if (error)
      return NextResponse.json({ error: "Un authorized" }, { status: 403 });

    const id = (await params).id;

    const address = await AddressModel.findById(id)
      .select("-customer -createdAt -updatedAt")
      .lean<IAddress>();
    if (!address)
      return NextResponse.json({ error: "Address not found" }, { status: 404 });

    return NextResponse.json(address);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: errorMessage(error) }, { status: 500 });
  }
}
