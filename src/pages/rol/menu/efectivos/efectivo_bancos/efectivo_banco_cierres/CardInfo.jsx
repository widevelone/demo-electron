import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { requestDefaulAuth } from '../../../../../../http/httpRequest';
import { DescriptionTargetInfo, ItemCardTargetInfo, LogoTargetInfo, MainTargetInfo, NumberTargetInfo, SubTitleTargetInfo, TitleTargetInfo } from '../../../../../../components/card/MainTargetInfo';
import { JoinStrings } from '../../../../../../utils/dataValidations'

const CardInfo = ({ reload, data, setData }) => {
    const params = useParams()
    const dipatch = useDispatch()

    const getData = async () => {
        await requestDefaulAuth(
            'get',
            `/efectivo/${params.efectivo_id}`,
            null,
            setData,
            dipatch
        )
    }
    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.efectivo_id, reload]);
    return (
        <MainTargetInfo
            extraClassName='grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-1'
        >
            <ItemCardTargetInfo
                logo={<LogoTargetInfo logo='fa-coins' />}
            >
                <TitleTargetInfo label={''} data={data?.estado_nombre} />
                {
                    data?.cuenta_bancaria_id &&
                    <DescriptionTargetInfo label='Cuenta bancaria:' data={JoinStrings([data.cuenta_bancaria_nombre, data.cuenta_bancaria_numero], ' - ')} />
                }
                {
                    data?.nombre &&
                    <DescriptionTargetInfo label='Nombre:' data={data?.nombre} />
                }
                {
                    data?.encargado_id &&
                    <DescriptionTargetInfo label='Encargado:' data={JoinStrings([data.nombres, data.apellido_paterno, data.apellido_materno], ' ')} />
                }
                {
                    data?.obs &&
                    <DescriptionTargetInfo label='Obs:' data={data?.obs} />
                }
            </ItemCardTargetInfo>
            <ItemCardTargetInfo>
                <SubTitleTargetInfo label={null} data={'Montos'} />
                <NumberTargetInfo label='Monto total Bs.' data={data?.monto_total} />
                <NumberTargetInfo label='Monto ingreso Bs.' data={data?.monto_total_ingreso} />
                <NumberTargetInfo label='Monto egreso Bs.' data={data?.monto_total_egreso} />
            </ItemCardTargetInfo>
            <ItemCardTargetInfo>
                <SubTitleTargetInfo label={null} data={'Descripción'} />
                <NumberTargetInfo label='Billetes Bs.' data={data?.billetes_total} />
                <NumberTargetInfo label='Monedas Bs.' data={data?.monedas_total} />
                <NumberTargetInfo label='Dolares en Bs.' data={data?.dolares_en_bs_total} />
            </ItemCardTargetInfo>
        </MainTargetInfo>
    )
}

export default CardInfo