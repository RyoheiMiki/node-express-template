import { Sequelize, Model, DataTypes } from "sequelize";
import { Users } from "./users";

const TABLE_NAME = "user_details";

class UserDetails extends Model {
  public id!: number;
  public user_id!: number;
  public nick_name?: string;
  public first_name?: string;
  public last_name?: string;
  public created_at!: Date;
  public updated_at!: Date;

  public static attach(sequelize: Sequelize): void {
    this.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        // user_id: {
        //   type: DataTypes.INTEGER,
        //   allowNull: false,
        // },
        nick_name: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        first_name: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        last_name: {
          type: DataTypes.STRING,
          allowNull: true,
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
    UserDetails.hasOne(Users, {
      foreignKey: "user_id",
      as: "user_detail",
    });
  }
}

const factory = (sequelize: Sequelize) => {
  UserDetails.attach(sequelize);

  return UserDetails;
};

export { UserDetails, factory };
