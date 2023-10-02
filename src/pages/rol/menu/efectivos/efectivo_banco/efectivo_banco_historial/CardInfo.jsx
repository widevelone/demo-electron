import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { requestDefaulAuth } from '../../../../../../http/httpRequest';
import { DescriptionTargetInfo, ItemCardTargetInfo, LogoTargetInfo, MainTargetInfo, NumberTargetInfo, SubTitleTargetInfo, TitleTargetInfo, ValueTargetInfo } from '../../../../../../components/card/MainTargetInfo';
import { formatDate } from '../../../../../../utils/dateFormat';
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
            extraClassName='grid-cols-1 md:grid-cols-2 xl:grid-cols-3'
        >
            <ItemCardTargetInfo
                logo={<LogoTargetInfo logo='fa-coins' />}
            >
                <TitleTargetInfo label={'Efectivo'} data={data?.nombre} />
                <DescriptionTargetInfo label='Banco' data={data?.nombre_banco} />
                <DescriptionTargetInfo label='Nro. de cuenta' data={data?.numero_cuenta} />
                <DescriptionTargetInfo label='Inicio' data={formatDate(data?.fecha_inicio)} />
                <DescriptionTargetInfo label='Cierre' data={formatDate(data?.fecha_fin)} />
                {data?.abierto ?
                    < DescriptionTargetInfo label='Estado' data={'Abierto'} />
                    :
                    <ValueTargetInfo label='Estado' data={'Cerrado'} icon={'fa-lock'} />
                }
            </ItemCardTargetInfo>
            <ItemCardTargetInfo>
                <SubTitleTargetInfo label={null} data={'Efectivo inicial'} />
                <NumberTargetInfo label='Efectivo Bs.' data={data?.efectivo_inicial} />
                {/* <NumberTargetInfo label='Billetes Bs.' data={data?.billetes_inicial} />
                <NumberTargetInfo label='Monedas Bs.' data={data?.monedas_inicial} />
                <NumberTargetInfo label='Dolares en Bs.' data={data?.dolares_en_bs_inicial} /> */}
            </ItemCardTargetInfo>
            <ItemCardTargetInfo>
                <SubTitleTargetInfo label={null} data={'Efectivo final'} />
                <NumberTargetInfo label='Efectivo Bs.' data={data?.efectivo_final} />
                {/* <NumberTargetInfo label='Billetes Bs.' data={data?.billetes_final} />
                <NumberTargetInfo label='Monedas Bs.' data={data?.monedas_final} />
                <NumberTargetInfo label='Dolares en Bs.' data={data?.dolares_en_bs_final} /> */}
            </ItemCardTargetInfo>
        </MainTargetInfo>
    )
}

export default CardInfo