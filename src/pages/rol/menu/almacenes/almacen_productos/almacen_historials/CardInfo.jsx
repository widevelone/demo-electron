import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { requestDefaulAuth } from '../../../../../../http/httpRequest';
import { DescriptionTargetInfo, ItemCardTargetInfo, LogoTargetInfo, MainTargetInfo, NumberTargetInfo, SubTitleTargetInfo, TitleTargetInfo } from '../../../../../../components/card/MainTargetInfo';
import { formatDate } from '../../../../../../utils/dateFormat';

const CardInfo = ({ reload }) => {
    const params = useParams()
    const dipatch = useDispatch()
    const [data, setData] = useState(null);
    const getData = async () => {
        await requestDefaulAuth(
            'get',
            `/almacen_producto_estado/${params.almacen_producto_estado_id}`,
            null,
            setData,
            dipatch
        )
    }
    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.almacen_producto_estado_id, reload]);
    return (
        <MainTargetInfo
            extraClassName='grid-cols-1 md:grid-cols-2 gap-1'
        >
            <ItemCardTargetInfo
                logo={<LogoTargetInfo logo='fa-box-open' />}
            >
                <TitleTargetInfo label='' data={data?.estado_nombre} />
                <DescriptionTargetInfo label='' data={data?.producto_nombre} />
                <DescriptionTargetInfo label={data?.estado_descripcion} data={null} />
                <DescriptionTargetInfo label='' data={formatDate(data?.createdAt)} />
            </ItemCardTargetInfo>
            <ItemCardTargetInfo>
                <SubTitleTargetInfo label={null} data={'Cantidades'} />
                <NumberTargetInfo label='Total' data={data?.cantidad_total} />
                <NumberTargetInfo label='Total ingreso' data={data?.cantidad_total_ingreso} />
                <NumberTargetInfo label='Total egreso' data={data?.cantidad_total_egreso} />
            </ItemCardTargetInfo>
        </MainTargetInfo>
    )
}

export default CardInfo