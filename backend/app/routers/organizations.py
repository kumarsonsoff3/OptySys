from bson import ObjectId
from fastapi import APIRouter, Body, HTTPException, status
from pymongo.errors import ConnectionFailure, DuplicateKeyError

from app.models.organizations import OrganizationBaseModel
from app.utils.database import MongoDBConnector
from app.utils.validators import validate_db_connection, validate_fields_not_empty

router = APIRouter(
    tags=["Organizations"],
    prefix="/organizations",
)

"""
    Post method for creating a new organization.
    
    Raises:
        HTTPException: Fields validation error
        HTTPException: Duplicate user error
        HTTPException: Internal server error
    
    Returns:
        _type_: Organization
"""


@router.post("/", response_description="Create a new organization")
async def create_organization(organization: OrganizationBaseModel = Body(...)):
    db = await MongoDBConnector().get_database_connection()
    validate_db_connection(db)

    validate_fields_not_empty(
        organization.name, organization.description, detail="Fields cannot be empty"
    )

    return organization
