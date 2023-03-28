import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Typography,
} from '@mui/material';
import React, { useEffect } from 'react';
import { getActiveAccount } from '../../../Background/redux-slices/selectors/accountSelectors';
import AccountActivity from '../../components/account-activity';
import AccountBalanceInfo from '../../components/account-balance-info';
import AccountInfo from '../../components/account-info';
import Header from '../../components/header';
import TransferAssetButton from '../../components/transfer-asset-button';
import { useBackgroundSelector } from '../../hooks';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const activeAccount = useBackgroundSelector(getActiveAccount);
  const navigate = useNavigate();

  const handleRecovery = () => {
    navigate('/recovery');
  };

  return (
    <Container sx={{ width: '62vw', height: '100vh' }}>
      <Header />
      <Card
        sx={{
          boxShadow: 'none',
          ml: 4,
          mr: 4,
          mt: 2,
          mb: 2,
          borderRadius: 5,
          border: '1px solid #d6d9dc',
        }}
      >
        <CardContent>
          {activeAccount && <AccountInfo address={activeAccount} />}
          <Box
            component="div"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            sx={{ m: 2 }}
          >
            <AccountBalanceInfo address={activeAccount as string} />
          </Box>
          <Box
            component="div"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            sx={{ m: 2 }}
          >
            <Button onClick={handleRecovery}>Set Recovery</Button>
          </Box>
          <Box
            component="div"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            sx={{ m: 4 }}
          >
            <TransferAssetButton activeAccount={activeAccount || ''} />
          </Box>
          <AccountActivity />
        </CardContent>
        <CardActions sx={{ width: '100%', pl: 2, pr: 2, pt: 0 }}>
          Card actions
        </CardActions>
      </Card>
    </Container>
  );
};

export default Home;
