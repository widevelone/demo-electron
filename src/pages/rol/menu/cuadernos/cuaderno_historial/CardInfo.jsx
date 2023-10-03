import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { requestDefaulAuth } from '../../../../../http/httpRequest';
import { DescriptionTargetInfo, ItemCardTargetInfo, LogoTargetInfo, MainTargetInfo, NumberTargetInfo, SubTitleTargetInfo, TitleTargetInfo, ValueTargetInfo } from '../../../../../components/card/MainTargetInfo';
import { JoinStrings } from '../../../../../utils/dataValidations'
import { formatDateWithTime } from '../../../../../utils/dateFormat';

const CardInfo = ({ reload, data, setData }) => {
    const params = useParams()
    const dipatch = useDispatch()

    const getData = async () => {
        await requestDefaulAuth(
            'get',
            `/cuaderno/${params.cuaderno_id}`,
            null,
            setData,
            dipatch
        )
    }
    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.cuaderno_id, reload]);
    return (
        <MainTargetInfo
            extraClassName='grid-cols-1 md:grid-cols-2 gap-1'
        >
            <ItemCardTargetInfo
                logo={<LogoTargetInfo logo='fa-book' />}
            >
                <TitleTargetInfo label={''} data={data?.codigo} />
                {
                    data?.user_id &&
                    <DescriptionTargetInfo label='Responsable:' data={JoinStrings([data.nombres, data.apellido_paterno, data.apellido_materno], ' ')} />
                }
                <DescriptionTargetInfo label='Fecha de apertura:' data={formatDateWithTime(data?.fecha_apertura)} />
                <DescriptionTargetInfo label='fecha de cierre:' data={formatDateWithTime(data?.fecha_cierre)} />
                {
                    data?.abierto ?
                        <DescriptionTargetInfo label='Estado:' data='Abierto' />
                        :
                        <ValueTargetInfo label='Estado:' data='Cerrado' icon={true} />
                }
            </ItemCardTargetInfo>
            <ItemCardTargetInfo>
                <SubTitleTargetInfo label={null} data={'Detalles'} />
                <NumberTargetInfo label='Efectivo Bs.' data={data?.efectivo_total} />
                <NumberTargetInfo label='Billetes Bs.' data={data?.billetes_total} />
                <NumberTargetInfo label='Monedas Bs.' data={data?.monedas_total} />
                <NumberTargetInfo label='Dolares en Bs.' data={data?.dolares_en_bs_total} />
            </ItemCardTargetInfo>
        </MainTargetInfo>
    )
}

export default CardInfo