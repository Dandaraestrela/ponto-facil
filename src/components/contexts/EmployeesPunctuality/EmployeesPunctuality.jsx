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
    if (employeesPunctualityList.length) {
      setAveragePunctuality(getAveragePunctuality(employeesPunctualityList));
    }
  }, [employeesPunctualityList]);

  return (
    <S.Wrapper>
      {averagePunctuality && (
        <>
          <S.Row>
            {averagePunctuality >= 80 && <Happy />}
            {averagePunctuality < 80 && averagePunctuality >= 70 && <Warning />}
            {averagePunctuality < 70 && <Sad />}
            <S.PunctualityText punctuality={averagePunctuality}>
              {Number(averagePunctuality.toFixed(2))}%
            </S.PunctualityText>
          </S.Row>
          <S.Title>
            {averagePunctuality >= 80 && 'Pontualidade acima da média de 70%'}
            {averagePunctuality < 80 &&
              averagePunctuality >= 70 &&
              'Pontualidade próxima da média de 70%'}
            {averagePunctuality < 70 && 'Pontualidade abaixo da média de 70%'}
            <br />
            <S.LightTitle>
              {averagePunctuality >= 80 && 'Funcionários pontuais!'}
              {averagePunctuality < 80 &&
                averagePunctuality >= 70 &&
                'Alguns atrasos estão acontecendo...'}
              {averagePunctuality < 70 &&
                'Sugestão: converse com seus funcionários!'}
            </S.LightTitle>
          </S.Title>
        </>
      )}
    </S.Wrapper>
  );
};

export default employeesPunctuality;
