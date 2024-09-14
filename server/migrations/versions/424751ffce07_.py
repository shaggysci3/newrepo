"""empty message

Revision ID: 424751ffce07
Revises: 97b7aea899a8
Create Date: 2024-08-13 13:28:05.151090

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '424751ffce07'
down_revision = '97b7aea899a8'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('carts', schema=None) as batch_op:
        batch_op.add_column(sa.Column('user_id', sa.Integer(), nullable=False))
        batch_op.create_foreign_key(batch_op.f('fk_carts_user_id_users'), 'users', ['user_id'], ['id'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('carts', schema=None) as batch_op:
        batch_op.drop_constraint(batch_op.f('fk_carts_user_id_users'), type_='foreignkey')
        batch_op.drop_column('user_id')

    # ### end Alembic commands ###
