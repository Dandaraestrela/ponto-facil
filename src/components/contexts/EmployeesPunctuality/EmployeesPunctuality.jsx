import * as S from './EmployeesPunctuality.styles';
import * as EmployeesTypes from 'store/types/employeesTypes';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAveragePunctuality } from 'utils/averagePunctuality';

import { ReactComponent as Happy } from 'assets/icons/happy.svg';
import { ReactComponent as Warning } from 'assets/icons/warning.svg';
import { ReactComponent as Sad } from 'assets/icons/sad.svg';

const employeesPunctuality = () => {
  const dispatch = useDispatch();
  const [averagePunctuality, setAveragePunctuality] = useState(null);
  const { employeesPunctualityList } = useSelector((state) => state.employees);

  useEffect(() => {
    dispatch({
      type: EmployeesTypes.EMPLOYEES_PUNCTUALITY_LIST,
    });
  }, []);

  useEffect(() => {
    setAveragePunctuality(getAveragePunctuality(employeesPunctualityList));
  }, [employeesPunctualityList]);

  return (
    <S.Wrapper>
      {console.log(averagePunctuality)}
      {Number.isInteger(averagePunctuality) && (
        <>
          <S.Row>
            {averagePunctuality >= 70 && <Happy />}
            {averagePunctuality < 70 && averagePunctuality > 40 && <Warning />}
            {averagePunctuality <= 40 && <Sad />}
            <S.PunctualityText punctuality={averagePunctuality}>
              {averagePunctuality}%
            </S.PunctualityText>
          </S.Row>
          <S.Title>
            {averagePunctuality >= 70 && 'Pontualidade acima da média de 70%'}
            {averagePunctuality < 70 &&
              averagePunctuality > 40 &&
              'Pontualidade abaixo da média de 70%'}
            {averagePunctuality <= 40 &&
              'Pontualidade muito abaixo da média de 70%'}
            <br />
            <S.LightTitle>
              {averagePunctuality >= 70 && 'Funcionários pontuais!'}
              {averagePunctuality < 70 &&
                averagePunctuality > 40 &&
                'Alguns atrasos estão acontecendo...'}
              {averagePunctuality <= 40 &&
                'Sugestão: converse com seus funcionários!'}
            </S.LightTitle>
          </S.Title>
        </>
      )}
    </S.Wrapper>
  );
};

export default employeesPunctuality;
