import { Sequelize, Model, DataTypes } from "sequelize";
import { UserDetails } from "./user_details";

const TABLE_NAME = "users";

class Users extends Model {
  public id!: number;
  public email!: string;
  public created_at!: Date;
  public updated_at!: Date;
  public user_detail!: UserDetails;

  public static attach(sequelize: Sequelize): void {
    this.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: "",
        },
        created_at: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        updated_at: {
          type: DataTypes.DATE,
          allowNull: false,
        },
      },
      {
        tableName: TABLE_NAME,
        underscored: true,
        sequelize: sequelize,
      }
    );
  }

  public static associate(): void {
    Users.hasOne(UserDetails, {
      foreignKey: "user_id",
    });
  }
}

const factory = (sequelize: Sequelize) => {
  Users.attach(sequelize);

  return Users;
};

export { Users, factory };
