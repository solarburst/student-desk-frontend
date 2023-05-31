import React from 'react'
import { Card } from 'antd';
import { LoginResponseDTO } from '../../api/dto/auth.dto';
import styles from "index.module.scss"

const { Meta } = Card;

const UserCard: React.FC<LoginResponseDTO> = ({ avatarId, vacancy, firstName, surName }: LoginResponseDTO) => {
  return (
    <Card
        hoverable
        style={{ width: 300, margin: 20 }}
        cover={<img alt="example" src={avatarId ? `http://localhost:3000/local-files/${avatarId}` : `src/assets/noavatar.png`} />}
    >
        <Meta title={vacancy} description={`${firstName} ${surName}`} />
    </Card>
  )
}

export default UserCard