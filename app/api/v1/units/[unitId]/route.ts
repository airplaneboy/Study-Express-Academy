import connectMongoose from '@/lib/mongooseConnect';
import Unit from '@/models/Unit';
import { merge } from 'lodash';

import jsonResponse from '@/utils/jsonResponse';

export async function GET(request: Request, { params }: { params: any }) {
  try {
    await connectMongoose();
    const unitId = params.unitId;

    if (!unitId) return jsonResponse({ error: 'Please add unit id' }, 'BAD_REQUEST');

    const unit = await Unit.findById(unitId);

    if (!unit) return jsonResponse({ error: `Unit with ID ${unitId} was not found` }, 'NOT_FOUND');

    return jsonResponse(unit, 'OK');
  } catch (error: any) {
    return jsonResponse({ error: error.message }, 'INTERNAL_SERVER_ERROR');
  }
}

export async function PATCH(request: Request, { params }: { params: any }) {
  try {
    await connectMongoose();
    const body = await request.json();
    const unitId = params.unitId;

    if (!body || !unitId) return jsonResponse({ error: 'Update unit body and unitID cannot be empty' }, 'BAD_REQUEST');

    let unit = await Unit.findById(unitId);

    if (!unit) return jsonResponse({ error: 'No unit was found' }, 'NOT_FOUND');

    unit = merge(unit, body);
    await unit.save();
    return jsonResponse(unit, 'OK');
  } catch (error: any) {
    return jsonResponse({ error: error.message }, 'INTERNAL_SERVER_ERROR');
  }
}

export async function DELETE(request: Request, { params }: { params: any }) {
  try {
    await connectMongoose();
    const unitId = params.unitId;

    if (!unitId) return jsonResponse({ error: `No unit with ID: ${unitId}` }, 'NOT_FOUND');
    await Unit.findByIdAndDelete(unitId);

    return jsonResponse({ msg: 'Unit was successfully deleted' }, 'OK');
  } catch (error: any) {
    return jsonResponse({ error: error.message }, 'INTERNAL_SERVER_ERROR');
  }
}
