export const logsStreamData = {
  status: 'success',
  data: {
    resultType: 'streams',
    result: [
      {
        stream: { filename: '/var/log/out.log', job: 'varlogs' },
        values: [
          [
            '1648210705642184300',
            'Gracefully stopping... (press Ctrl+C again to force)',
          ],
          [
            '1648210705642133800',
            'no-spaces-message-containers-loki-1|level=infots=2022-03-25T11:48:08.2469652Zcaller=metrics.go:92org_id=fakelatency=fastquery="sumby(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))"query_type=metricrange_type=rangelength=29m0sstep=1m0sduration=10.1059msstatus=200limit=1744returned_lines=0throughput=0Btotal_bytes=0B',
          ],
          [
            '1648210705642086500',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:22.5967808Z caller=table.go:362 msg="finished uploading table index_19076"',
          ],
          [
            '1648210705642051100',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:22.5967337Z caller=table.go:335 msg="uploading table index_19076"',
          ],
          [
            '1648210705642015100',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:22.5965727Z caller=table_manager.go:171 msg="uploading tables"',
          ],
          [
            '1648210705641977900',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.2540252Z caller=metrics.go:92 org_id=fake latency=fast query="sum by (level) (count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=3h0m0s step=1m0s duration=207.1487ms status=200 limit=1744 returned_lines=0 throughput=170kB total_bytes=35kB',
          ],
          [
            '1648210705641948600',
            'containers-loki-1           | ts=2022-03-25T11:48:08.251459Z caller=spanlogger.go:87 org_id=fake Summary.BytesProcessedPerSecond="170 kB" Summary.LinesProcessedPerSecond=1037 Summary.TotalBytesProcessed="35 kB" Summary.TotalLinesProcessed=215 Summary.ExecTime=207.1487ms',
          ],
          [
            '1648210705641880600',
            'containers-loki-1           | ts=2022-03-25T11:48:08.2508223Z caller=spanlogger.go:87 org_id=fake Ingester.TotalReached=96 Ingester.TotalChunksMatched=0 Ingester.TotalBatches=1 Ingester.TotalLinesSent=215 Ingester.HeadChunkBytes="0 B" Ingester.HeadChunkLines=0 Ingester.DecompressedBytes="35 kB" Ingester.DecompressedLines=215 Ingester.CompressedBytes="7.1 kB" Ingester.TotalDuplicates=0 Store.TotalChunksRef=0 Store.TotalChunksDownloaded=0 Store.ChunksDownloadTime=0s Store.HeadChunkBytes="0 B" Store.HeadChunkLines=0 Store.DecompressedBytes="0 B" Store.DecompressedLines=0 Store.CompressedBytes="0 B" Store.TotalDuplicates=0',
          ],
          [
            '1648210705641861800',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.2488669Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=11.9127ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705641805100',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.2478703Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=13.6637ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705641775400',
            'containers-loki-1|level=infots=2022-03-25T11:48:08.2469652Zcaller=metrics.go:92org_id=fakelatency=fastquery="sumby(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))"query_type=metricrange_type=rangelength=29m0sstep=1m0sduration=10.1059msstatus=200limit=1744returned_lines=0throughput=0Btotal_bytes=0B',
          ],
          [
            '1648210705641733900',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.244389Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=10.4477ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705641715600',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.2432427Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=5.9513ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705641635900',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.2347687Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=3.1085ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705641591800',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.2340651Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=3.2368ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705641549900',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.2306201Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=13.6243ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705641531100',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.2291362Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=15.961099ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705641284100',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.2283813Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=8.5965ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705641256200',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.2276644Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=9.8366ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705641225200',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.2269566Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=13.8542ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705641132400',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.226528Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=12.1833ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705641070900',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.2256401Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=11.206ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705641035100',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.224417Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=8.5204ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705640998700',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.2234511Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=8.8465ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705640980600',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.2202534Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=8.0435ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705640960100',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.2142637Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=10.2474ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705640641800',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.2126612Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=7.0594ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705640558100',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.2117254Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=9.1098ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705640510800',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.2090517Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=9.1706ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705640420800',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.2079765Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=4.6332ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705640314400',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.2073479Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=7.0897ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705640253900',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.205829Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=6.8567ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705640187500',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.2052576Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=4.7442ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705640151600',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.2012901Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=21.4335ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705640115500',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.2013337Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=23.0039ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705640007600',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.2012796Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=10.2829ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705639967300',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1979242Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=11.179ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705639923200',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1961643Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=7.6685ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705639905200',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1951842Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=11m0s step=1m0s duration=4.7679ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705639845300',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1908493Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=13.8385ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705639826700',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1853099Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=11m0s step=1m0s duration=4.1718ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705639781900',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1844771Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=8.270899ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705639763200',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1774354Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=4.3234ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705639625900',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1764905Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=4.5124ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705639532400',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1736886Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=5.5557ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705639457600',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1716823Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=3.4513ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705639338200',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.171155Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=11m0s step=1m0s duration=1.6976ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705639297100',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1704375Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=5.2603ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705639221400',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1700303Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=3.8391ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705639180600',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1686448Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=11m0s step=1m0s duration=1.6594ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705639156000',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1683376Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=6.4774ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705639051100',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1682656Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=3.6539ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705639022300',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1660074Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=11m0s step=1m0s duration=1.5236ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705638877100',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1633426Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=11m0s step=1m0s duration=2.007699ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705638838100',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1627228Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=5.3114ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705638800100',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1620095Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=4.4069ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705638782100',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1592203Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=11.5038ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705638648200',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1584107Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=4.5463ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705638604500',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1557479Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=11m0s step=1m0s duration=1.8656ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705638583600',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1542584Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=6.2767ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705638520500',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1542683Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=3.8716ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705638332900',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1525142Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=11m0s step=1m0s duration=2.7213ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705638253700',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1510444Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=7.2051ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705638236500',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1469705Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=11m0s step=1m0s duration=1.9242ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705638173200',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1494508Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=8.4455ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705638071400',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1483864Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=7.1005ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705638051900',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1476902Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=7.2163ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705638029500',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1469509Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=18m0s step=1m0s duration=4.4426ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705637998200',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1439385Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=3.939599ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705637808200',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1431096Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=6.2205ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705637658400',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1427324Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=3.2854ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705637580000',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1415128Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=11m0s step=1m0s duration=1.8354ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705637545100',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1374465Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=18m0s step=1m0s duration=9.6333ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705637524000',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1369554Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=10.1188ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705637472600',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.136625Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=7.3119ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705637287300',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1354627Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=11m0s step=1m0s duration=2.0382ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705637219700',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1348957Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=7.4346ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705637176500',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1344379Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=18m0s step=1m0s duration=3.3031ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705636893500',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1329524Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=18m0s step=1m0s duration=5.4898ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705636857200',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1318946Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=3.766ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705636808000',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1300273Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=11m0s step=1m0s duration=1.8418ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705636742800',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1297953Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=11m0s step=1m0s duration=2.3265ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705636708200',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1280252Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=3.2473ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705636690800',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1250718Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=11m0s step=1m0s duration=2.3302ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705636633700',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1237085Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=15.6226ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705636582100',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1206029Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=18m0s step=1m0s duration=11.641ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705636549400',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1209125Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=18m0s step=1m0s duration=7.528ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705636434300',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1206458Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=7.4848ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705636288800',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1202747Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=3.2672ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705636201300',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1201363Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=12.04ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705636159600',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1199151Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=9.2099ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705636140100',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1198209Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=18m0s step=1m0s duration=9.8563ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705636024600',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1186367Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=11.4083ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705635946700',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1178861Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=9.5267ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705635892100',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1131992Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=11m0s step=1m0s duration=2.1608ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705635870400',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1089161Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=8.6014ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705635554500',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1083675Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=9.1859ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705635364300',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1067022Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=18m0s step=1m0s duration=4.3594ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705635303000',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.1018638Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=21.3313ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705635285100',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.100827Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=17.6853ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705635208900',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.0984414Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=18m0s step=1m0s duration=15.8171ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705635094700',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.0965091Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=18m0s step=1m0s duration=15.4145ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705635032100',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.0963821Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=18m0s step=1m0s duration=21.0105ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705634983900',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.0946368Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=11.4692ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705634946400',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.093112Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=18m0s step=1m0s duration=7.2794ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705634893200',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.0921606Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=10.2328ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705634878000',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.0916272Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=7.7009ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705634520500',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.0910749Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=11.1915ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705634503000',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.0803478Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=18m0s step=1m0s duration=25.7212ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705634329500',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.0750219Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=6.8682ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705634312800',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.0748413Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=20.9484ms status=200 limit=1744 returned_lines=0 throughput=1.7MB total_bytes=35kB',
          ],
          [
            '1648210705634201300',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.0688993Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=18m0s step=1m0s duration=12.5592ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705634136400',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.0688332Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=10.5755ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705634093400',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.0664327Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=10.405ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705634074700',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.0618298Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=9.08ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705634003100',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.0604706Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=18m0s step=1m0s duration=8.8358ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705633968700',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.0599481Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=2.9742ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705633949300',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.0591038Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=18m0s step=1m0s duration=7.5767ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705633792100',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.0585561Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=6.9741ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705633771800',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.054198Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=11m0s step=1m0s duration=2.4364ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705633684300',
            'containers-loki-1           | level=info ts=2022-03-25T11:48:08.0086524Z caller=metrics.go:92 org_id=fake latency=fast query="{filename=\\"/var/log/out.log\\"}" query_type=limited range_type=range length=3h0m0s step=5s duration=26.5924ms status=200 limit=1000 returned_lines=215 throughput=1.3MB total_bytes=35kB',
          ],
          [
            '1648210705633637100',
            'containers-grafana-1        | logger=context t=2022-03-25T11:48:06.91+0000 lvl=info msg="Request Completed" method=GET path=/api/live/ws status=0 remote_addr=172.20.0.1 time_ms=1 size=0 referer=',
          ],
          [
            '1648210705633608700',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:22.6660572Z caller=table.go:420 msg="cleaning up unwanted dbs from table index_19076"',
          ],
          [
            '1648210705633578300',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:22.6660016Z caller=table.go:362 msg="finished uploading table index_19076"',
          ],
          [
            '1648210705633530100',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:22.6659369Z caller=table.go:335 msg="uploading table index_19076"',
          ],
          [
            '1648210705633491700',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:22.6653218Z caller=table_manager.go:171 msg="uploading tables"',
          ],
          [
            '1648210705633430600',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:07.1143438Z caller=metrics.go:92 org_id=fake latency=fast query="sum by (level) (count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=3h0m0s step=1m0s duration=231.5194ms status=200 limit=1744 returned_lines=0 throughput=152kB total_bytes=35kB',
          ],
          [
            '1648210705633354100',
            'containers-loki-1           | ts=2022-03-25T11:47:07.1140227Z caller=spanlogger.go:87 org_id=fake Summary.BytesProcessedPerSecond="152 kB" Summary.LinesProcessedPerSecond=928 Summary.TotalBytesProcessed="35 kB" Summary.TotalLinesProcessed=215 Summary.ExecTime=231.5194ms',
          ],
          [
            '1648210705633242300',
            'containers-loki-1           | ts=2022-03-25T11:47:07.1139281Z caller=spanlogger.go:87 org_id=fake Ingester.TotalReached=96 Ingester.TotalChunksMatched=0 Ingester.TotalBatches=1 Ingester.TotalLinesSent=215 Ingester.HeadChunkBytes="0 B" Ingester.HeadChunkLines=0 Ingester.DecompressedBytes="35 kB" Ingester.DecompressedLines=215 Ingester.CompressedBytes="7.1 kB" Ingester.TotalDuplicates=0 Store.TotalChunksRef=0 Store.TotalChunksDownloaded=0 Store.ChunksDownloadTime=0s Store.HeadChunkBytes="0 B" Store.HeadChunkLines=0 Store.DecompressedBytes="0 B" Store.DecompressedLines=0 Store.CompressedBytes="0 B" Store.TotalDuplicates=0',
          ],
          [
            '1648210705633223600',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:07.1122294Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=29.1702ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705633156100',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:07.1074775Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=25.8528ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705633135500',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:07.1073865Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=4.988ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705633111000',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:07.1041259Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=28.1171ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705632958900',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:07.1017268Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=31.2473ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705632920800',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:07.098995Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=23.1098ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705632822800',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:07.0947944Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=19.5795ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705632789500',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:07.0911887Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=16.0948ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705632746200',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:07.0831539Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=12.78ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705632658200',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:07.0814637Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=10.9512ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705632599700',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:07.0740597Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=4.9768ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705632573200',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:07.0719054Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=7.3117ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705632524200',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:07.0704318Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=9.8638ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705632461500',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:07.0690494Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=8.4278ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705632318600',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:07.0676539Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=7.8889ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705632278100',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:07.0674054Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=8.2562ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705632259500',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:07.0650574Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=5.2997ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705632193000',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:07.0649688Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=6.0928ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705632169500',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:07.0625247Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=6.6232ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705632012200',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:07.0619567Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=4.8482ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705631980400',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:07.0612656Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=3.3497ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705631960700',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:07.0569069Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=3.4883ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705631714200',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:07.0536381Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=9.1203ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705631657300',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:07.0517107Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=4.0608ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705631620200',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:07.0516665Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=7.7133ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705631603100',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:07.0518815Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=6.7696ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705631545700',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:07.0516261Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=7.0276ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705631504400',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:07.0510892Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=4.0574ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705631332800',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:07.0505414Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=6.3884ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705631283700',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:07.0504928Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=5.3176ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705631265500',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:07.0501845Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=3.5738ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705631157500',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:07.0450342Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=7.5732ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705631099200',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:07.0432321Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=7.4019ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705631047000',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:07.0413197Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=30.4269ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705631011900',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:07.0396534Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=31.4964ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705630836000',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:07.0383573Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=28.0999ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705630819700',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:07.0387527Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=32.4783ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705630789900',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:07.0383573Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=25.5909ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705630676000',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:07.0356446Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=23.588ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705630631000',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:07.0349318Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=25.3123ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705630606200',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:07.0336961Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=23.3232ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705630563600',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:07.0097573Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=12m0s step=1m0s duration=1.6808ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705630266400',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:07.0097379Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=4.5852ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705630191300',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:07.0057354Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=5.9823ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705630088600',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:07.0024965Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=6.7461ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705630014900',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:07.0012686Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=12m0s step=1m0s duration=2.1666ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705629946000',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.999335Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=10.7554ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705629929700',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.9984495Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=11.039ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705629882900',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.9981912Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=12m0s step=1m0s duration=1.5251ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705629859200',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.9977465Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=12m0s step=1m0s duration=1.6228ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705629837000',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.9955171Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=12m0s step=1m0s duration=1.8496ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705629527100',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.9932502Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=8.78ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705629319800',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.9919258Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=4.4843ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705629279500',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.9899314Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=12m0s step=1m0s duration=6.024ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705629199200',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.9867801Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=12m0s step=1m0s duration=1.5207ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705629172900',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.9867723Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=3.1488ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705629128700',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.9865081Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=12m0s step=1m0s duration=1.4812ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705629096500',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.9862607Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=12m0s step=1m0s duration=1.8632ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705629048400',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.9808779Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=12m0s step=1m0s duration=1.6973ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705629031100',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.9792376Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=12m0s step=1m0s duration=12.4013ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705628911300',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.9789504Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=14.8034ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705628859700',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.9778405Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=8.0847ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705628844000',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.9770014Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=12m0s step=1m0s duration=14.036ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705628797300',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.9769018Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=12m0s step=1m0s duration=5.8975ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705628733100',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.9752552Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=16.8576ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705628707800',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.9716595Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=11.6209ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705628687800',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.9738887Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=3.6124ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705628590300',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.959744Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=12m0s step=1m0s duration=2.1188ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705628568000',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.9596313Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=12m0s step=1m0s duration=2.1572ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705628497600',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.9558745Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=3.9148ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705628437100',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.9550463Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=3.0998ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705628420800',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.9523117Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=6.2994ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705628406100',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.9504223Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=10.4204ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705628070500',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.950184Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=8.3461ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705627917400',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.9499367Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=7.6161ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705627836100',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.9493211Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=6.3826ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705627814700',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.9486558Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=6.5208ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705627727200',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.9482898Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=7.1372ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705627707300',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.9481407Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=5.4105ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705627638100',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.9477116Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=6.9238ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705627589100',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.9475378Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=3.9429ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705627468000',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.9425025Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=12m0s step=1m0s duration=1.7521ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705627264500',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.9392949Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=7.7847ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705627242700',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.9391923Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=17m0s step=1m0s duration=10.5772ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705626934800',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.9379856Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=9.472ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705626893600',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.9376276Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=4.9637ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705626828100',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.9362392Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=9.1844ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705626808800',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.9352506Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=4.2337ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705626751900',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.9352015Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=8.7973ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705626694000',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.9337803Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=5.8442ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705626632500',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.9335924Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=6.221ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705626582700',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.9333652Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=4.6435ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705626562700',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.9269287Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=17m0s step=1m0s duration=11.5216ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705626519100',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.9258594Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=7.281ms status=200 limit=1744 returned_lines=0 throughput=4.8MB total_bytes=35kB',
          ],
          [
            '1648210705626486500',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.9235498Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=8.76ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705626145200',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.9230808Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=6.4366ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705626063500',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.9216315Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=17m0s step=1m0s duration=4.3572ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705625989700',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.9201523Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=17m0s step=1m0s duration=4.4002ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705625944700',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.916937Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=17m0s step=1m0s duration=8.047ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705625888300',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.9154669Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=17m0s step=1m0s duration=7.3699ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705625834400',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.913012Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=17m0s step=1m0s duration=3.4409ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705625718500',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.9129569Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=2.5355ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705625636700',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.9091061Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=18.3271ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705625599400',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.908138Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=17m0s step=1m0s duration=17.0011ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705625351600',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.906624Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=17m0s step=1m0s duration=16.6524ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705625274000',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.9061009Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=17m0s step=1m0s duration=15.1008ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705625209100',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.9052044Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=17m0s step=1m0s duration=12.0998ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705625151100',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.9037719Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=17m0s step=1m0s duration=15.0865ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705625136200',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.901896Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=17m0s step=1m0s duration=9.69ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705625069000',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.8999425Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=17m0s step=1m0s duration=6.2592ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705625026800',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.8994227Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=17m0s step=1m0s duration=7.5808ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705625009000',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.8983687Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=17m0s step=1m0s duration=12.7185ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705624929300',
            'containers-loki-1           | level=info ts=2022-03-25T11:47:06.8680801Z caller=metrics.go:92 org_id=fake latency=fast query="{filename=\\"/var/log/out.log\\"}" query_type=limited range_type=range length=3h0m0s step=5s duration=7.4985ms status=200 limit=1000 returned_lines=215 throughput=4.7MB total_bytes=35kB',
          ],
          [
            '1648210705624894200',
            'containers-grafana-1        | logger=context t=2022-03-25T11:47:05.75+0000 lvl=info msg="Request Completed" method=GET path=/api/live/ws status=0 remote_addr=172.20.0.1 time_ms=1 size=0 referer=',
          ],
          [
            '1648210705624843900',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.726081Z caller=metrics.go:92 org_id=fake latency=fast query="sum by (level) (count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=3h0m0s step=1m0s duration=250.279299ms status=200 limit=1744 returned_lines=0 throughput=140kB total_bytes=35kB',
          ],
          [
            '1648210705624778800',
            'containers-loki-1           | ts=2022-03-25T11:46:47.7255813Z caller=spanlogger.go:87 org_id=fake Summary.BytesProcessedPerSecond="140 kB" Summary.LinesProcessedPerSecond=859 Summary.TotalBytesProcessed="35 kB" Summary.TotalLinesProcessed=215 Summary.ExecTime=250.279299ms',
          ],
          [
            '1648210705624740800',
            'containers-loki-1           | ts=2022-03-25T11:46:47.7254534Z caller=spanlogger.go:87 org_id=fake Ingester.TotalReached=96 Ingester.TotalChunksMatched=0 Ingester.TotalBatches=1 Ingester.TotalLinesSent=215 Ingester.HeadChunkBytes="0 B" Ingester.HeadChunkLines=0 Ingester.DecompressedBytes="35 kB" Ingester.DecompressedLines=215 Ingester.CompressedBytes="7.1 kB" Ingester.TotalDuplicates=0 Store.TotalChunksRef=0 Store.TotalChunksDownloaded=0 Store.ChunksDownloadTime=0s Store.HeadChunkBytes="0 B" Store.HeadChunkLines=0 Store.DecompressedBytes="0 B" Store.DecompressedLines=0 Store.CompressedBytes="0 B" Store.TotalDuplicates=0',
          ],
          [
            '1648210705624709100',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.7232817Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=11.9095ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705624685200',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.7214202Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=7.9085ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705624306600',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.7204481Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=9.2321ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705624289000',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.7197804Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=7.9973ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705624194600',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.7201445Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=8.4261ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705624112600',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.7197463Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=8.8274ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705624060800',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.7135744Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=5.0215ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705624002300',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.7090421Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=10.9307ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705623883100',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.7071223Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=14.5008ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705623831800',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.7060191Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=11.6647ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705623813800',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.7059301Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=8.1778ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705623772500',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.7056563Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=9.9949ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705623700000',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.7049037Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=4.7549ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705623681500',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.7043993Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=6.2703ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705623470800',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.7039738Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=10.1697ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705623328300',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.7031248Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=10.3495ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705623250400',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.7024239Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=7.4002ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705623214200',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.6962048Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=4.0592ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705623128400',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.693375Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=5.6414ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705623066700',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.6926662Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=4.091799ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705622992200',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.6885287Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=11.4528ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705622941500',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.6884486Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=10.146ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705622923000',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.6880637Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=14.4031ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705622815700',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.6879412Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=13.1712ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705622756900',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.6876245Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=10.0476ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705622736900',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.6874475Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=10.1432ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705622675100',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.6871461Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=9.149ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705622600800',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.6869702Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=10.3031ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705622542900',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.6833746Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=7.1368ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705622481100',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.6786546Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=3.3357ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705622256200',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.6736049Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=6.8567ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705622178100',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.6710306Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=8.7044ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705622113800',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.6705077Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=15.417ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705622059900',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.6700368Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=6.3293ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705622043900',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.6643284Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=8.2181ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705621985400',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.6631683Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=5.4794ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705621919800',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.6624094Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=5.046ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705621869600',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.6613253Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=12.1022ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705621587700',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.660798Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=9.8673ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705621537800',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.6592477Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=5.8793ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705621520300',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.6539139Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=7.0447ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705621486000',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.6523516Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=8.1224ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705621443000',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.6515628Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=8.3341ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705621263900',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.6475453Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=29.5519ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705621126600',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.6473879Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=4.078799ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705620985400',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.6388414Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=16.3358ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705620830300',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.6362688Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=17.3844ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705620778500',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.6325899Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=21.685ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705620685600',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.6220547Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=6.4552ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705620632300',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.6285805Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=10.973ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705620572000',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.6265189Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=12.2337ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705620553200',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.6219875Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=4.6357ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705620055500',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.6199569Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=14.5422ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705619998400',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.6185587Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=5.4384ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705619671800',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.6133513Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=5.1659ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705619547300',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.6090683Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=6.0971ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705619518800',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.6081191Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=13m0s step=1m0s duration=4.834ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705619500300',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.6070618Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=11.321ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705619289300',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.6061586Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=16m0s step=1m0s duration=8.205199ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705619167700',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.6052605Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=11.9014ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705619135000',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.6040757Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=8.8687ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705619060600',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.6035089Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=13m0s step=1m0s duration=1.9126ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705619041900',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.6025353Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=8.386299ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705618953600',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.5989815Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=16m0s step=1m0s duration=5.6446ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705618899600',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.5957032Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=7.0967ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705618774900',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.5949063Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=16m0s step=1m0s duration=28.0766ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705618700300',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.5945987Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=16m0s step=1m0s duration=7.3064ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705618598700',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.5911998Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=4.5207ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705618561400',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.5865203Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=18.0521ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705618276900',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.5793992Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=9.5672ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705618225100',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.5788516Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=16m0s step=1m0s duration=7.997199ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705618202800',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.5762008Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=11.241ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705618106600',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.5755594Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=11.7223ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705618029600',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.573841Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=16m0s step=1m0s duration=9.5482ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705617993500',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.5728447Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=13m0s step=1m0s duration=1.9975ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705617973800',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.5653363Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=13m0s step=1m0s duration=1.9819ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705617519700',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.5706334Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=7.8145ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705617284000',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.5654471Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=3.1747ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705617095200',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.5602505Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=9.6243ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705616983200',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.5596759Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=16.0689ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705616784400',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.5516397Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=13m0s step=1m0s duration=7.7942ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705616718700',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.5561708Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=16m0s step=1m0s duration=5.3395ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705616638900',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.549425Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=20.1838ms status=200 limit=1744 returned_lines=0 throughput=1.7MB total_bytes=35kB',
          ],
          [
            '1648210705616555200',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.545368Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=13m0s step=1m0s duration=2.2499ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705616507600',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.5409768Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=5.6191ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705615902400',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.5526378Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=13m0s step=1m0s duration=4.208ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705615862100',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.5396214Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=16m0s step=1m0s duration=8.7104ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705615833300',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.5365333Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=16m0s step=1m0s duration=5.4962ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705615786900',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.5354547Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=7.7543ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705615601700',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.5339172Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=8.7366ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705615535100',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.5329485Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=6.0475ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705615340100',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.5297359Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=13m0s step=1m0s duration=3.7588ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705615313700',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.5282729Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=13m0s step=1m0s duration=2.3599ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705615176400',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.5262754Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=16m0s step=1m0s duration=7.1182ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705615130300',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.5239969Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=11.2652ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705615113000',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.5203401Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=16m0s step=1m0s duration=5.4785ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705615045900',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.5198347Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=16m0s step=1m0s duration=6.7366ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705614884000',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.5197473Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=8.1178ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705614862200',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.5186254Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=13m0s step=1m0s duration=2.7694ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705614824200',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.5184165Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=13m0s step=1m0s duration=2.1502ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705614763200',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.5171555Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=7.001ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705614725400',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.5107167Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=16m0s step=1m0s duration=5.099ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705614187900',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.5100704Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=16m0s step=1m0s duration=15.0691ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705614062800',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.5080006Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=16m0s step=1m0s duration=13.2073ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705614000900',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.5061858Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=13m0s step=1m0s duration=11.4357ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705613942100',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.5021154Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=13m0s step=1m0s duration=6.773ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705613902700',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.4955583Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=13m0s step=1m0s duration=4.6204ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705613830800',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.4927279Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=16m0s step=1m0s duration=12.1669ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705613757400',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.4907324Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=8.6444ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705613696600',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.4892931Z caller=metrics.go:92 org_id=fake latency=fast query="{filename=\\"/var/log/out.log\\"}" query_type=limited range_type=range length=3h0m0s step=5s duration=11.4285ms status=200 limit=1000 returned_lines=215 throughput=3.1MB total_bytes=35kB',
          ],
          [
            '1648210705613663500',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.4861354Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=5.1679ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705613591000',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.4832461Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=13m0s step=1m0s duration=2.087299ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705613572600',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:47.4814378Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=13m0s step=1m0s duration=1.5562ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705613525800',
            'containers-grafana-1        | logger=context t=2022-03-25T11:46:43.59+0000 lvl=info msg="Request Completed" method=GET path=/api/datasources/proxy/1/loki/api/v1/query_range status=400 remote_addr=172.20.0.1 time_ms=6 size=61 referer="http://localhost:3000/explore?orgId=1\u0026left=%7B%22datasource%22:%22Loki%22,%22queries%22:%5B%7B%22refId%22:%22A%22,%22expr%22:%22%7Bfilename%3D%5C%22%2Fvar%2Flog%2Fout.log%5C%22%7D%5B1m%5D%22,%22queryType%22:%22range%22,%22resolution%22:1%7D%5D,%22range%22:%7B%22from%22:%22now-3h%22,%22to%22:%22now%22%7D%7D"',
          ],
          [
            '1648210705613506000',
            'containers-grafana-1        | logger=context t=2022-03-25T11:46:43.59+0000 lvl=info msg="Request Completed" method=GET path=/api/datasources/proxy/1/loki/api/v1/query_range status=400 remote_addr=172.20.0.1 time_ms=5 size=74 referer="http://localhost:3000/explore?orgId=1\u0026left=%7B%22datasource%22:%22Loki%22,%22queries%22:%5B%7B%22refId%22:%22A%22,%22expr%22:%22%7Bfilename%3D%5C%22%2Fvar%2Flog%2Fout.log%5C%22%7D%5B1m%5D%22,%22queryType%22:%22range%22,%22resolution%22:1%7D%5D,%22range%22:%7B%22from%22:%22now-3h%22,%22to%22:%22now%22%7D%7D"',
          ],
          [
            '1648210705613357800',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.7694322Z caller=metrics.go:92 org_id=fake latency=fast query="sum by (level) (count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=3h0m0s step=5s duration=194.8797ms status=200 limit=1744 returned_lines=0 throughput=361kB total_bytes=70kB',
          ],
          [
            '1648210705613331600',
            'containers-loki-1           | ts=2022-03-25T11:46:27.766937Z caller=spanlogger.go:87 org_id=fake Summary.BytesProcessedPerSecond="361 kB" Summary.LinesProcessedPerSecond=2206 Summary.TotalBytesProcessed="70 kB" Summary.TotalLinesProcessed=430 Summary.ExecTime=194.8797ms',
          ],
          [
            '1648210705613265200',
            'containers-loki-1           | ts=2022-03-25T11:46:27.7668778Z caller=spanlogger.go:87 org_id=fake Ingester.TotalReached=96 Ingester.TotalChunksMatched=0 Ingester.TotalBatches=2 Ingester.TotalLinesSent=430 Ingester.HeadChunkBytes="0 B" Ingester.HeadChunkLines=0 Ingester.DecompressedBytes="70 kB" Ingester.DecompressedLines=430 Ingester.CompressedBytes="14 kB" Ingester.TotalDuplicates=0 Store.TotalChunksRef=0 Store.TotalChunksDownloaded=0 Store.ChunksDownloadTime=0s Store.HeadChunkBytes="0 B" Store.HeadChunkLines=0 Store.DecompressedBytes="0 B" Store.DecompressedLines=0 Store.CompressedBytes="0 B" Store.TotalDuplicates=0',
          ],
          [
            '1648210705613132200',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.7616453Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=9.5394ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705613092100',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.760723Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=5.7083ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705613064700',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.7585259Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=4.9177ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705612949000',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.7569932Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=12.3969ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705612927800',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.7559457Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=6.4138ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705612796800',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.7553122Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=10.7119ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705612681000',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.7545865Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=6.1894ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705612631900',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.7539383Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=3.928499ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705612346000',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.7510777Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=6.3482ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705612315400',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.7472735Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=13m30s step=5s duration=2.5639ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705612297300',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.7467403Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=6.0968ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705612278700',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.7426825Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=8.0765ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705612153500',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.7423022Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=13m30s step=5s duration=2.2146ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705612029600',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.7415361Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=13m30s step=5s duration=1.5906ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705612010600',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.7410687Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=13m30s step=5s duration=2.3266ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705611719700',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.7387664Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=7.5475ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705611548600',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.7370865Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=13m30s step=5s duration=5.0053ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705611464600',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.7362239Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=5.2529ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705611262000',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.7336507Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=13m30s step=5s duration=1.318ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705611184000',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.7297859Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=13m30s step=5s duration=2.3129ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705611074800',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.7315952Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=13m30s step=5s duration=1.7318ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705611037100',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.7310931Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=19.0895ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705610933700',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.7299949Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=9.9342ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705610914600',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.7297676Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=13m30s step=5s duration=2.0155ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705610464400',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.7237166Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=13m30s step=5s duration=9.0309ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705610144300',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.7223575Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=8.2957ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705610090000',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.7159427Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=13m30s step=5s duration=2.3047ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705610063800',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.7156573Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=13m30s step=5s duration=1.7316ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705609969800',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.7153138Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=6.3555ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705609922600',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.7147222Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=9.511ms status=200 limit=1744 returned_lines=0 throughput=3.7MB total_bytes=35kB',
          ],
          [
            '1648210705609900400',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.7137348Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=5.5475ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705609877600',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.712907Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=13m30s step=5s duration=2.7795ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705609856400',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.7090495Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=5.0903ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705609742200',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.7067448Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=13m30s step=5s duration=2.4837ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705609695000',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.7045677Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=8.3277ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705609648500',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.7037502Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=5.1121ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705609620200',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.7028705Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=6.4033ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705609564900',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.7026767Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=7.0732ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705609515500',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.7020423Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=9.0321ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705609489800',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.7020107Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=9.3321ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705609355100',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.7012976Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=7.185ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705609091900',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.7003852Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=13m30s step=5s duration=1.8714ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705608937700',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.6977037Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=4.8494ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705608896700',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.6971987Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=4.7099ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705608877500',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.6937693Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=4.0711ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705608732500',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.6927736Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=3.0202ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705608650400',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.6889525Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=11.3759ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705608573700',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.6868156Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=6.9444ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705608391500',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.6865803Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=9.6519ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705608373900',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.6857907Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=16m25s step=5s duration=7.111ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705608236300',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.6857334Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=16m25s step=5s duration=3.7684ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705608188200',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.6852363Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=7.959799ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705608167900',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.6837287Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=16m25s step=5s duration=8.3839ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705607901100',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.6841817Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=16m25s step=5s duration=8.6126ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705607602800',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.6836348Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=16m25s step=5s duration=7.385ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705607583800',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.683057Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=2.9608ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705607527400',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.6789769Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=16m25s step=5s duration=4.6788ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705607495900',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.6752553Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=16m25s step=5s duration=9.1368ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705607479700',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.6737922Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=16m25s step=5s duration=5.3603ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705607425600',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.6707513Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=16m25s step=5s duration=11.2724ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705606801200',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.6699583Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=5.4478ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705606760300',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.6695796Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=9.662ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705606734100',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.6688416Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=19.1338ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705606691200',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.6678978Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=16m25s step=5s duration=14.1633ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705606647300',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.6668527Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=16m25s step=5s duration=8.7707ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705606627100',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.6656723Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=6.2018ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705606264600',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.6649428Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=16m25s step=5s duration=8.99ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705606245800',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.6628909Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=5.1036ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705606223700',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.6596459Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=24.3315ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705606174100',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.6567564Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=11.5633ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705606119400',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.6543814Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=19.1428ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705606089300',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.6537947Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=20.0979ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705606052200',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.6530275Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=5.9837ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705606033600',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.6519181Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=7.642ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705605933200',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.6509063Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=16m25s step=5s duration=3.2986ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705605878900',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.646025Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=16m25s step=5s duration=7.7029ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705605785200',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.6452639Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=12.7478ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705605765700',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.6449217Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=16m25s step=5s duration=5.3642ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705605683400',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.6418872Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=6.4931ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705605633400',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.6408328Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=7.9091ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705605544800',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.6362799Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=14.1904ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705605149800',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.6361754Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=5.387ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705605129600',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.6339336Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=2.9711ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705605026200',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.6335898Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=10.1295ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705604973400',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.6249009Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=15.3347ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705604955000',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.6214119Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=14.7269ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705604935700',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.6199182Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=10.3665ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705604826100',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.6188989Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=6.4459ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705604764900',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.6174096Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=11.3669ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705604712600',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.6170293Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=5.3461ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705604678600',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.6159955Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=12.173ms status=200 limit=1744 returned_lines=0 throughput=2.9MB total_bytes=35kB',
          ],
          [
            '1648210705604659900',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.6146525Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=10.7616ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705604594200',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.6132301Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=6.2777ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705604564500',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.6126194Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=4.2265ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705604545000',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.6076179Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=4.7875ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705604345700',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.6070143Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=4.4613ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705604252000',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.5977997Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=8.4804ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705604172600',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.5976349Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=7.5957ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705604139100',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.5975252Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=7.1871ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705603550700',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.5972886Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=8.0252ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705603531800',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.5971745Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=4.4946ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705603284700',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.5970687Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=5.732ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705603254500',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.591969Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=7.2883ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705603221200',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.5910702Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=8.8283ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705603189900',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.5906076Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=8.8962ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705603079200',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.5905628Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=9.2532ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705602987300',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.5879001Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=6.9683ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705602881800',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.5848748Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=16m25s step=5s duration=5.4325ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705602790100',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.5823425Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=13m30s step=5s duration=1.6086ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705602768400',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.5812017Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=4.3694ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705602699800',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.5794802Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=2.5867ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705602681600',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:27.5793453Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=2.75ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705602621100',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:23.9508799Z caller=metrics.go:92 org_id=fake latency=fast query="sum by (level) (count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=33.2586ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705602563900',
            'containers-loki-1           | ts=2022-03-25T11:46:23.9507078Z caller=spanlogger.go:87 org_id=fake Summary.BytesProcessedPerSecond="0 B" Summary.LinesProcessedPerSecond=0 Summary.TotalBytesProcessed="0 B" Summary.TotalLinesProcessed=0 Summary.ExecTime=33.2586ms',
          ],
          [
            '1648210705602539400',
            'containers-loki-1           | ts=2022-03-25T11:46:23.9505533Z caller=spanlogger.go:87 org_id=fake Ingester.TotalReached=16 Ingester.TotalChunksMatched=0 Ingester.TotalBatches=0 Ingester.TotalLinesSent=0 Ingester.HeadChunkBytes="0 B" Ingester.HeadChunkLines=0 Ingester.DecompressedBytes="0 B" Ingester.DecompressedLines=0 Ingester.CompressedBytes="0 B" Ingester.TotalDuplicates=0 Store.TotalChunksRef=0 Store.TotalChunksDownloaded=0 Store.ChunksDownloadTime=0s Store.HeadChunkBytes="0 B" Store.HeadChunkLines=0 Store.DecompressedBytes="0 B" Store.DecompressedLines=0 Store.CompressedBytes="0 B" Store.TotalDuplicates=0',
          ],
          [
            '1648210705602053400',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:23.9486698Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=7.3151ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705602027000',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:23.9458114Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=5.3509ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705602009300',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:23.9442751Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=3.9822ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705601982800',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:23.9394451Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=6.1244ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705601944900',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:23.9391569Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=8.311799ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705601927700',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:23.9387614Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=8.818ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705601910100',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:23.9387525Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=3.4295ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705601840000',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:23.938086Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=7.3143ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705601822300',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:23.9380048Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=5.3683ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705601739900',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:23.9343937Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=7.4131ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705601721200',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:23.933552Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=8.064099ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705601631200',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:23.9319458Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=6.646ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705601615200',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:23.9318508Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=4.34ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705601597500',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:23.9311622Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=6.5469ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705601559100',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:23.9273753Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=6.5858ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705601497000',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:23.9252932Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=3.9689ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705601447800',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:22.7335722Z caller=table.go:420 msg="cleaning up unwanted dbs from table index_19076"',
          ],
          [
            '1648210705601325100',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:22.7333261Z caller=table.go:362 msg="finished uploading table index_19076"',
          ],
          [
            '1648210705601274700',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:22.7332072Z caller=table.go:335 msg="uploading table index_19076"',
          ],
          [
            '1648210705601192400',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:22.7329474Z caller=table_manager.go:171 msg="uploading tables"',
          ],
          [
            '1648210705601130200',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:08.7145907Z caller=metrics.go:92 org_id=fake latency=fast query="sum by (level) (count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=74.2139ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705601080500',
            'containers-loki-1           | ts=2022-03-25T11:46:08.714351Z caller=spanlogger.go:87 org_id=fake Summary.BytesProcessedPerSecond="0 B" Summary.LinesProcessedPerSecond=0 Summary.TotalBytesProcessed="0 B" Summary.TotalLinesProcessed=0 Summary.ExecTime=74.2139ms',
          ],
          [
            '1648210705601060000',
            'containers-loki-1           | ts=2022-03-25T11:46:08.7141473Z caller=spanlogger.go:87 org_id=fake Ingester.TotalReached=16 Ingester.TotalChunksMatched=0 Ingester.TotalBatches=0 Ingester.TotalLinesSent=0 Ingester.HeadChunkBytes="0 B" Ingester.HeadChunkLines=0 Ingester.DecompressedBytes="0 B" Ingester.DecompressedLines=0 Ingester.CompressedBytes="0 B" Ingester.TotalDuplicates=0 Store.TotalChunksRef=0 Store.TotalChunksDownloaded=0 Store.ChunksDownloadTime=0s Store.HeadChunkBytes="0 B" Store.HeadChunkLines=0 Store.DecompressedBytes="0 B" Store.DecompressedLines=0 Store.CompressedBytes="0 B" Store.TotalDuplicates=0',
          ],
          [
            '1648210705600984000',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:08.711899Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=10.4941ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705600834200',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:08.7094944Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=14.616ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705600770600',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:08.706894Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=11.6252ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705600713400',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:08.7068842Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=6.0232ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705600669300',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:08.7058882Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=10.6016ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705600181900',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:08.6966758Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=30.9349ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705600143100',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:08.6894712Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=34.6109ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705600076400',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:08.6854657Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=18.266ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705599911600',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:08.6852015Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=18.5314ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705599798200',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:08.6828842Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=18.0014ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705599711800',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:08.6805587Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=14.639ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705599656900',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:08.6738314Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=6.2625ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705599606200',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:08.6718212Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=17.4827ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705599582800',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:08.6713751Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=6.9681ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705599534700',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:08.6712398Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=6.8289ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705599502100',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:08.6521544Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=3.6103ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705599486100',
            'containers-loki-1           | level=info ts=2022-03-25T11:46:08.6346387Z caller=metrics.go:92 org_id=fake latency=fast query="{filename=\\"/var/log/out.log\\"}" query_type=limited range_type=instant length=0s step=0s duration=5.3675ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705599454200',
            'containers-grafana-1        | logger=context t=2022-03-25T11:46:07.82+0000 lvl=info msg="Request Completed" method=GET path=/api/live/ws status=0 remote_addr=172.20.0.1 time_ms=1 size=0 referer=',
          ],
          [
            '1648210705599334800',
            'containers-loki-1           | level=info ts=2022-03-25T11:45:57.8847777Z caller=metrics.go:92 org_id=fake latency=fast query="sum by (level) (count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=27.6363ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705599306300',
            'containers-loki-1           | ts=2022-03-25T11:45:57.8843603Z caller=spanlogger.go:87 org_id=fake Summary.BytesProcessedPerSecond="0 B" Summary.LinesProcessedPerSecond=0 Summary.TotalBytesProcessed="0 B" Summary.TotalLinesProcessed=0 Summary.ExecTime=27.6363ms',
          ],
          [
            '1648210705599252300',
            'containers-loki-1           | ts=2022-03-25T11:45:57.8842572Z caller=spanlogger.go:87 org_id=fake Ingester.TotalReached=16 Ingester.TotalChunksMatched=0 Ingester.TotalBatches=0 Ingester.TotalLinesSent=0 Ingester.HeadChunkBytes="0 B" Ingester.HeadChunkLines=0 Ingester.DecompressedBytes="0 B" Ingester.DecompressedLines=0 Ingester.CompressedBytes="0 B" Ingester.TotalDuplicates=0 Store.TotalChunksRef=0 Store.TotalChunksDownloaded=0 Store.ChunksDownloadTime=0s Store.HeadChunkBytes="0 B" Store.HeadChunkLines=0 Store.DecompressedBytes="0 B" Store.DecompressedLines=0 Store.CompressedBytes="0 B" Store.TotalDuplicates=0',
          ],
          [
            '1648210705599212700',
            'containers-loki-1           | level=info ts=2022-03-25T11:45:57.8826036Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=7.7483ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705599194100',
            'containers-loki-1           | level=info ts=2022-03-25T11:45:57.8817197Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=3.9156ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705599109900',
            'containers-loki-1           | level=info ts=2022-03-25T11:45:57.8799946Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=5.3032ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705599077500',
            'containers-loki-1           | level=info ts=2022-03-25T11:45:57.8799049Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=5.3369ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705599023300',
            'containers-loki-1           | level=info ts=2022-03-25T11:45:57.8759676Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=6.9189ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705598939500',
            'containers-loki-1           | level=info ts=2022-03-25T11:45:57.8748197Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=5.0744ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705598643700',
            'containers-loki-1           | level=info ts=2022-03-25T11:45:57.8731782Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=9.4294ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705598451200',
            'containers-loki-1           | level=info ts=2022-03-25T11:45:57.8729495Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=8.6063ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705598420500',
            'containers-loki-1           | level=info ts=2022-03-25T11:45:57.8727491Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=9.5611ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705598325500',
            'containers-loki-1           | level=info ts=2022-03-25T11:45:57.8713087Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=9.4625ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705598238600',
            'containers-loki-1           | level=info ts=2022-03-25T11:45:57.8704893Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=6.5592ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705598197700',
            'containers-loki-1           | level=info ts=2022-03-25T11:45:57.8690667Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=6.838ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705598180300',
            'containers-loki-1           | level=info ts=2022-03-25T11:45:57.8676065Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=8.0739ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705597990600',
            'containers-loki-1           | level=info ts=2022-03-25T11:45:57.8669691Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=4.4013ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705597923600',
            'containers-loki-1           | level=info ts=2022-03-25T11:45:57.8644994Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=5.1171ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705597898400',
            'containers-loki-1           | level=info ts=2022-03-25T11:45:57.8636305Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=4.245ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705597768900',
            'containers-loki-1           | level=info ts=2022-03-25T11:45:57.8456345Z caller=metrics.go:92 org_id=fake latency=fast query="{filename=\\"/var/log/out.log\\"}" query_type=limited range_type=instant length=0s step=0s duration=5.1522ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705597719700',
            'containers-grafana-1        | logger=context t=2022-03-25T11:45:56.82+0000 lvl=info msg="Request Completed" method=GET path=/api/live/ws status=0 remote_addr=172.20.0.1 time_ms=2 size=0 referer=',
          ],
          [
            '1648210705597668800',
            'containers-loki-1           | level=info ts=2022-03-25T11:45:22.800651Z caller=table.go:420 msg="cleaning up unwanted dbs from table index_19076"',
          ],
          [
            '1648210705597644700',
            'containers-loki-1           | level=info ts=2022-03-25T11:45:22.8006169Z caller=table.go:362 msg="finished uploading table index_19076"',
          ],
          [
            '1648210705597616600',
            'containers-loki-1           | level=info ts=2022-03-25T11:45:22.8005898Z caller=table.go:335 msg="uploading table index_19076"',
          ],
          [
            '1648210705597578100',
            'containers-loki-1           | level=info ts=2022-03-25T11:45:22.8004143Z caller=table_manager.go:171 msg="uploading tables"',
          ],
          [
            '1648210705597557100',
            'containers-loki-1           | level=info ts=2022-03-25T11:45:04.5196861Z caller=metrics.go:92 org_id=fake latency=fast query="sum by (level) (count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=27.7088ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705597424600',
            'containers-loki-1           | ts=2022-03-25T11:45:04.5193161Z caller=spanlogger.go:87 org_id=fake Summary.BytesProcessedPerSecond="0 B" Summary.LinesProcessedPerSecond=0 Summary.TotalBytesProcessed="0 B" Summary.TotalLinesProcessed=0 Summary.ExecTime=27.7088ms',
          ],
          [
            '1648210705597348400',
            'containers-loki-1           | ts=2022-03-25T11:45:04.5191526Z caller=spanlogger.go:87 org_id=fake Ingester.TotalReached=16 Ingester.TotalChunksMatched=0 Ingester.TotalBatches=0 Ingester.TotalLinesSent=0 Ingester.HeadChunkBytes="0 B" Ingester.HeadChunkLines=0 Ingester.DecompressedBytes="0 B" Ingester.DecompressedLines=0 Ingester.CompressedBytes="0 B" Ingester.TotalDuplicates=0 Store.TotalChunksRef=0 Store.TotalChunksDownloaded=0 Store.ChunksDownloadTime=0s Store.HeadChunkBytes="0 B" Store.HeadChunkLines=0 Store.DecompressedBytes="0 B" Store.DecompressedLines=0 Store.CompressedBytes="0 B" Store.TotalDuplicates=0',
          ],
          [
            '1648210705597316800',
            'containers-loki-1           | level=info ts=2022-03-25T11:45:04.5167118Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=5.4584ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705597167300',
            'containers-loki-1           | level=info ts=2022-03-25T11:45:04.5165403Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=4.4238ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705597105700',
            'containers-loki-1           | level=info ts=2022-03-25T11:45:04.5155577Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=5.9737ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705597076700',
            'containers-loki-1           | level=info ts=2022-03-25T11:45:04.5154553Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=6.6528ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705596978900',
            'containers-loki-1           | level=info ts=2022-03-25T11:45:04.5138719Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=8.45ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705596941500',
            'containers-loki-1           | level=info ts=2022-03-25T11:45:04.5119635Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=5.6858ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705596871000',
            'containers-loki-1           | level=info ts=2022-03-25T11:45:04.5102017Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=14.4346ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705596682300',
            'containers-loki-1           | level=info ts=2022-03-25T11:45:04.5101572Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=14.4751ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705596656900',
            'containers-loki-1           | level=info ts=2022-03-25T11:45:04.5089223Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=12.5108ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705596622600',
            'containers-loki-1           | level=info ts=2022-03-25T11:45:04.5063044Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=11.867ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705596595100',
            'containers-loki-1           | level=info ts=2022-03-25T11:45:04.5052616Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=9.5866ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705596563600',
            'containers-loki-1           | level=info ts=2022-03-25T11:45:04.5039077Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=9.4957ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705596548800',
            'containers-loki-1           | level=info ts=2022-03-25T11:45:04.5032897Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=6.4794ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705596365400',
            'containers-loki-1           | level=info ts=2022-03-25T11:45:04.5017475Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=7.3674ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705596323900',
            'containers-loki-1           | level=info ts=2022-03-25T11:45:04.5007896Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=5.6206ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705596308200',
            'containers-loki-1           | level=info ts=2022-03-25T11:45:04.49867Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=4.0809ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705596213200',
            'containers-loki-1           | level=info ts=2022-03-25T11:45:04.309094Z caller=metrics.go:92 org_id=fake latency=fast query="{filename=\\"/var/log/out.log\\"}" query_type=limited range_type=instant length=0s step=0s duration=6.4262ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705596154800',
            'containers-grafana-1        | logger=context t=2022-03-25T11:45:03.21+0000 lvl=info msg="Request Completed" method=GET path=/api/live/ws status=0 remote_addr=172.20.0.1 time_ms=1 size=0 referer=',
          ],
          [
            '1648210705596088800',
            'containers-loki-1           | level=info ts=2022-03-25T11:44:59.2816825Z caller=metrics.go:92 org_id=fake latency=fast query="sum by (level) (count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=32.6453ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705596025900',
            'containers-loki-1           | ts=2022-03-25T11:44:59.2813812Z caller=spanlogger.go:87 org_id=fake Summary.BytesProcessedPerSecond="0 B" Summary.LinesProcessedPerSecond=0 Summary.TotalBytesProcessed="0 B" Summary.TotalLinesProcessed=0 Summary.ExecTime=32.6453ms',
          ],
          [
            '1648210705595964300',
            'containers-loki-1           | ts=2022-03-25T11:44:59.2812718Z caller=spanlogger.go:87 org_id=fake Ingester.TotalReached=16 Ingester.TotalChunksMatched=0 Ingester.TotalBatches=0 Ingester.TotalLinesSent=0 Ingester.HeadChunkBytes="0 B" Ingester.HeadChunkLines=0 Ingester.DecompressedBytes="0 B" Ingester.DecompressedLines=0 Ingester.CompressedBytes="0 B" Ingester.TotalDuplicates=0 Store.TotalChunksRef=0 Store.TotalChunksDownloaded=0 Store.ChunksDownloadTime=0s Store.HeadChunkBytes="0 B" Store.HeadChunkLines=0 Store.DecompressedBytes="0 B" Store.DecompressedLines=0 Store.CompressedBytes="0 B" Store.TotalDuplicates=0',
          ],
          [
            '1648210705595946900',
            'containers-loki-1           | level=info ts=2022-03-25T11:44:59.2791311Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=6.6806ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705595907100',
            'containers-loki-1           | level=info ts=2022-03-25T11:44:59.2746546Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=2.8319ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705595890200',
            'containers-loki-1           | level=info ts=2022-03-25T11:44:59.2738439Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=4.2618ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705595834100',
            'containers-loki-1           | level=info ts=2022-03-25T11:44:59.2739699Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=3.3955ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705595818400',
            'containers-loki-1           | level=info ts=2022-03-25T11:44:59.2738689Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=8.3014ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705595786500',
            'containers-loki-1           | level=info ts=2022-03-25T11:44:59.2738332Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=3.2754ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705595769300',
            'containers-loki-1           | level=info ts=2022-03-25T11:44:59.2676248Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=13.7076ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705595752300',
            'containers-loki-1           | level=info ts=2022-03-25T11:44:59.26741Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=13.7546ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705595699600',
            'containers-loki-1           | level=info ts=2022-03-25T11:44:59.2669409Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=13.5012ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705595676700',
            'containers-loki-1           | level=info ts=2022-03-25T11:44:59.2666522Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=14.0508ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705595652800',
            'containers-loki-1           | level=info ts=2022-03-25T11:44:59.2665395Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=13.6287ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705595570800',
            'containers-loki-1           | level=info ts=2022-03-25T11:44:59.2652588Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=9.4142ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705595526900',
            'containers-loki-1           | level=info ts=2022-03-25T11:44:59.2634867Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=11.2215ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705595511200',
            'containers-loki-1           | level=info ts=2022-03-25T11:44:59.262605Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=8.7018ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705595494700',
            'containers-loki-1           | level=info ts=2022-03-25T11:44:59.2609954Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=5.5668ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705595477200',
            'containers-loki-1           | level=info ts=2022-03-25T11:44:59.2568064Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=\\"/var/log/out.log\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=4.49ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705595205400',
            'containers-loki-1           | level=info ts=2022-03-25T11:44:59.2525455Z caller=metrics.go:92 org_id=fake latency=fast query="{filename=\\"/var/log/out.log\\"}" query_type=limited range_type=instant length=0s step=0s duration=3.7042ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705595169000',
            'containers-loki-1           | level=info ts=2022-03-25T11:44:22.9187262Z caller=checkpoint.go:504 msg="atomic checkpoint finished" old=/loki/wal/checkpoint.000142.tmp new=/loki/wal/checkpoint.000142',
          ],
          [
            '1648210705595128300',
            'containers-loki-1           | level=info ts=2022-03-25T11:44:22.9139622Z caller=checkpoint.go:342 msg="attempting checkpoint for" dir=/loki/wal/checkpoint.000142',
          ],
          [
            '1648210705595093600',
            'containers-loki-1           | level=info ts=2022-03-25T11:44:22.9134809Z caller=checkpoint.go:617 msg="starting checkpoint"',
          ],
          [
            '1648210705595077700',
            'containers-loki-1           | level=info ts=2022-03-25T11:44:22.8709705Z caller=table_manager.go:207 msg="syncing tables"',
          ],
          [
            '1648210705595034200',
            'containers-loki-1           | level=info ts=2022-03-25T11:44:22.8691061Z caller=table.go:420 msg="cleaning up unwanted dbs from table index_19076"',
          ],
          [
            '1648210705595015700',
            'containers-loki-1           | level=info ts=2022-03-25T11:44:22.8689265Z caller=table.go:362 msg="finished uploading table index_19076"',
          ],
          [
            '1648210705595000600',
            'containers-loki-1           | level=info ts=2022-03-25T11:44:22.8686501Z caller=table.go:335 msg="uploading table index_19076"',
          ],
          [
            '1648210705594984600',
            'containers-loki-1           | level=info ts=2022-03-25T11:44:22.8681562Z caller=table_manager.go:171 msg="uploading tables"',
          ],
          [
            '1648210705594914800',
            'containers-loki-1           | level=info ts=2022-03-25T11:44:22.8091629Z caller=metrics.go:92 org_id=fake latency=fast query="sum by (level) (count_over_time({job=\\"varlogs\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=27.5112ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705594881200',
            'containers-loki-1           | ts=2022-03-25T11:44:22.808755Z caller=spanlogger.go:87 org_id=fake Summary.BytesProcessedPerSecond="0 B" Summary.LinesProcessedPerSecond=0 Summary.TotalBytesProcessed="0 B" Summary.TotalLinesProcessed=0 Summary.ExecTime=27.5112ms',
          ],
          [
            '1648210705594847400',
            'containers-loki-1           | ts=2022-03-25T11:44:22.8086163Z caller=spanlogger.go:87 org_id=fake Ingester.TotalReached=16 Ingester.TotalChunksMatched=0 Ingester.TotalBatches=0 Ingester.TotalLinesSent=0 Ingester.HeadChunkBytes="0 B" Ingester.HeadChunkLines=0 Ingester.DecompressedBytes="0 B" Ingester.DecompressedLines=0 Ingester.CompressedBytes="0 B" Ingester.TotalDuplicates=0 Store.TotalChunksRef=0 Store.TotalChunksDownloaded=0 Store.ChunksDownloadTime=0s Store.HeadChunkBytes="0 B" Store.HeadChunkLines=0 Store.DecompressedBytes="0 B" Store.DecompressedLines=0 Store.CompressedBytes="0 B" Store.TotalDuplicates=0',
          ],
          [
            '1648210705594831900',
            'containers-loki-1           | level=info ts=2022-03-25T11:44:22.8069507Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({job=\\"varlogs\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=10.1205ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705594790500',
            'containers-loki-1           | level=info ts=2022-03-25T11:44:22.8035127Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({job=\\"varlogs\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=5.468ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705594747200',
            'containers-loki-1           | level=info ts=2022-03-25T11:44:22.8035027Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({job=\\"varlogs\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=6.8021ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705594730500',
            'containers-loki-1           | level=info ts=2022-03-25T11:44:22.8027343Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({job=\\"varlogs\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=5.1397ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705594493400',
            'containers-loki-1           | level=info ts=2022-03-25T11:44:22.8020959Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({job=\\"varlogs\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=6.0993ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705594477800',
            'containers-loki-1           | level=info ts=2022-03-25T11:44:22.8015349Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({job=\\"varlogs\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=3.5609ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705594445500',
            'containers-loki-1           | level=info ts=2022-03-25T11:44:22.800132Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({job=\\"varlogs\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=3.3065ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705594310400',
            'containers-loki-1           | level=info ts=2022-03-25T11:44:22.7970535Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({job=\\"varlogs\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=12.0021ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705594270100',
            'containers-loki-1           | level=info ts=2022-03-25T11:44:22.7953308Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({job=\\"varlogs\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=11.123ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705594252800',
            'containers-loki-1           | level=info ts=2022-03-25T11:44:22.7912509Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({job=\\"varlogs\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=7.4559ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705594234600',
            'containers-loki-1           | level=info ts=2022-03-25T11:44:22.7912015Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({job=\\"varlogs\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=4.3852ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705594197800',
            'containers-loki-1           | level=info ts=2022-03-25T11:44:22.7891011Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({job=\\"varlogs\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=4.4193ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705594181500',
            'containers-loki-1           | level=info ts=2022-03-25T11:44:22.7890662Z caller=metrics.go:92 org_id=fake latency=fast query="{job=\\"varlogs\\"}" query_type=limited range_type=instant length=0s step=0s duration=8.2559ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705594079100',
            'containers-loki-1           | level=info ts=2022-03-25T11:44:22.7890662Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({job=\\"varlogs\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=2.5393ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705594055500',
            'containers-loki-1           | level=info ts=2022-03-25T11:44:22.7886147Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({job=\\"varlogs\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=4.1718ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705594022200',
            'containers-loki-1           | level=info ts=2022-03-25T11:44:22.7884381Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({job=\\"varlogs\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=4.8321ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705593998400',
            'containers-loki-1           | level=info ts=2022-03-25T11:44:22.7880903Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({job=\\"varlogs\\"}[1m]))" query_type=metric range_type=instant length=0s step=0s duration=2.787ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705593973300',
            'containers-loki-1           | level=info ts=2022-03-25T11:43:22.9354228Z caller=table.go:420 msg="cleaning up unwanted dbs from table index_19076"',
          ],
          [
            '1648210705593904300',
            'containers-loki-1           | level=info ts=2022-03-25T11:43:22.9353913Z caller=table.go:362 msg="finished uploading table index_19076"',
          ],
          [
            '1648210705593887200',
            'containers-loki-1           | level=info ts=2022-03-25T11:43:22.9352667Z caller=table.go:335 msg="uploading table index_19076"',
          ],
          [
            '1648210705593815300',
            'containers-loki-1           | level=info ts=2022-03-25T11:43:22.9351054Z caller=table_manager.go:171 msg="uploading tables"',
          ],
          [
            '1648210705593780000',
            'containers-loki-1           | level=info ts=2022-03-25T11:42:23.0041973Z caller=table.go:420 msg="cleaning up unwanted dbs from table index_19076"',
          ],
          [
            '1648210705593747100',
            'containers-loki-1           | level=info ts=2022-03-25T11:42:23.0038127Z caller=table.go:362 msg="finished uploading table index_19076"',
          ],
          [
            '1648210705593724000',
            'containers-loki-1           | level=info ts=2022-03-25T11:42:23.0035221Z caller=table.go:335 msg="uploading table index_19076"',
          ],
          [
            '1648210705593664800',
            'containers-loki-1           | level=info ts=2022-03-25T11:42:23.0030904Z caller=table_manager.go:171 msg="uploading tables"',
          ],
          [
            '1648210705593633900',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:23.0712023Z caller=table.go:420 msg="cleaning up unwanted dbs from table index_19076"',
          ],
          [
            '1648210705593610100',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:23.0711676Z caller=table.go:362 msg="finished uploading table index_19076"',
          ],
          [
            '1648210705593557600',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:23.071092Z caller=table.go:335 msg="uploading table index_19076"',
          ],
          [
            '1648210705593517300',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:23.0708296Z caller=table_manager.go:171 msg="uploading tables"',
          ],
          [
            '1648210705593486000',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:22.5958196Z caller=metrics.go:92 org_id=fake latency=fast query="sum by (host) (rate({job=\\"mysql\\"}\\n    |= \\"error\\" != \\"timeout\\"\\n    | json\\n    | duration \u003e 10s [1m]))\\n   \\n   " query_type=metric range_type=instant length=0s step=0s duration=27.3714ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705593452900',
            'containers-loki-1           | ts=2022-03-25T11:41:22.5947707Z caller=spanlogger.go:87 org_id=fake Summary.BytesProcessedPerSecond="0 B" Summary.LinesProcessedPerSecond=0 Summary.TotalBytesProcessed="0 B" Summary.TotalLinesProcessed=0 Summary.ExecTime=27.3714ms',
          ],
          [
            '1648210705593429900',
            'containers-loki-1           | ts=2022-03-25T11:41:22.5946332Z caller=spanlogger.go:87 org_id=fake Ingester.TotalReached=16 Ingester.TotalChunksMatched=0 Ingester.TotalBatches=0 Ingester.TotalLinesSent=0 Ingester.HeadChunkBytes="0 B" Ingester.HeadChunkLines=0 Ingester.DecompressedBytes="0 B" Ingester.DecompressedLines=0 Ingester.CompressedBytes="0 B" Ingester.TotalDuplicates=0 Store.TotalChunksRef=0 Store.TotalChunksDownloaded=0 Store.ChunksDownloadTime=0s Store.HeadChunkBytes="0 B" Store.HeadChunkLines=0 Store.DecompressedBytes="0 B" Store.DecompressedLines=0 Store.CompressedBytes="0 B" Store.TotalDuplicates=0',
          ],
          [
            '1648210705593396400',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:22.5919087Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=instant length=0s step=0s duration=7.4518ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705593241000',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:22.5906753Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=instant length=0s step=0s duration=4.7452ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705593200500',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:22.586929Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=instant length=0s step=0s duration=8.8067ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705593135700',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:22.586791Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=instant length=0s step=0s duration=5.9237ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705593074100',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:22.5857934Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=instant length=0s step=0s duration=8.3517ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705593001800',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:22.584218Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=instant length=0s step=0s duration=6.46ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705592942600',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:22.5849287Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=instant length=0s step=0s duration=9.3291ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705592903000',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:22.584218Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=instant length=0s step=0s duration=9.9331ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705592849300',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:22.5829648Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=instant length=0s step=0s duration=4.1513ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705592824600',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:22.5825823Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=instant length=0s step=0s duration=5.5369ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705592789400',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:22.5781262Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=instant length=0s step=0s duration=4.1243ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705592738200',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:22.576157Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=instant length=0s step=0s duration=5.4452ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705592711700',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:22.5750318Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=instant length=0s step=0s duration=5.2271ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705592651700',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:22.5742966Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=instant length=0s step=0s duration=3.991299ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705592618300',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:22.5729327Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=instant length=0s step=0s duration=3.0234ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705592602300',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:22.5714774Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=instant length=0s step=0s duration=2.2862ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705592568700',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:08.0575619Z caller=metrics.go:92 org_id=fake latency=fast query="sum by (host) (rate({job=\\"mysql\\"}\\n    |= \\"error\\" != \\"timeout\\"\\n    | json\\n    | duration \u003e 10s [1m]))\\n   \\n   " query_type=metric range_type=range length=3h0m0s step=5s duration=160.1955ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705592526100',
            'containers-loki-1           | ts=2022-03-25T11:41:08.0571888Z caller=spanlogger.go:87 org_id=fake Summary.BytesProcessedPerSecond="0 B" Summary.LinesProcessedPerSecond=0 Summary.TotalBytesProcessed="0 B" Summary.TotalLinesProcessed=0 Summary.ExecTime=160.1955ms',
          ],
          [
            '1648210705592493300',
            'containers-loki-1           | ts=2022-03-25T11:41:08.0571166Z caller=spanlogger.go:87 org_id=fake Ingester.TotalReached=96 Ingester.TotalChunksMatched=0 Ingester.TotalBatches=0 Ingester.TotalLinesSent=0 Ingester.HeadChunkBytes="0 B" Ingester.HeadChunkLines=0 Ingester.DecompressedBytes="0 B" Ingester.DecompressedLines=0 Ingester.CompressedBytes="0 B" Ingester.TotalDuplicates=0 Store.TotalChunksRef=0 Store.TotalChunksDownloaded=0 Store.ChunksDownloadTime=0s Store.HeadChunkBytes="0 B" Store.HeadChunkLines=0 Store.DecompressedBytes="0 B" Store.DecompressedLines=0 Store.CompressedBytes="0 B" Store.TotalDuplicates=0',
          ],
          [
            '1648210705592469400',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:08.0559624Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=3.7202ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705592430300',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:08.0558303Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=3.0508ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705592359200',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:08.053607Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=6.0881ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705592310100',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:08.0525228Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=5.8127ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705592265200',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:08.0517064Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=3.9312ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705592208200',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:08.0512647Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=6.1833ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705592190400',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:08.0508712Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=4.52ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705592157900',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:08.0493071Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=4.8532ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705592099800',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:08.0486348Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=6.3816ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705592047700',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:08.0483245Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=2.355ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705592022000',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:08.0481501Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=4.4976ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705591987600',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:08.0480604Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=4.4519ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705591876700',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:08.045245Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=2.818ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705591807500',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:08.0449586Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=3.8321ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705591781500',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:08.0425146Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=4.9627ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705591739100',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:08.0414304Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=7.2838ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705591722000',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:08.0412277Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=4.1003ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705591678400',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:08.040788Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=2.596ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705591644600',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:08.0394116Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=6.0827ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705591618200',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:08.0389067Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=3.5626ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705591573800',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:08.0388953Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=4.8078ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705591372400',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:08.038627Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=3.0165ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705591338400',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:08.0382236Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=3.7098ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705591319800',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:08.0374131Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=4.6378ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705591255100',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:08.0345975Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=4.8142ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705591211000',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:08.0345668Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=5.6834ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705591162200',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:08.0341543Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=6.1908ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705591122400',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:08.0305858Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=7.7067ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705591042100',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:08.0299267Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=5.8475ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705591013900',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:08.028796Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=4.2241ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705590972200',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:08.0282623Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=5.357ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705590948200',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:08.0277461Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=3.7836ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705590758200',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:08.0262274Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=11.9107ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705590695200',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:08.0253199Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=16.8555ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705590624400',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:08.0244643Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=14.3452ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705590599500',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:08.0200689Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=14.2979ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705590306100',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:08.0202627Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=5.9041ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705590209400',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:08.020038Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=16.1631ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705590147200',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:08.0188574Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=5.7061ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705590023500',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:08.0182337Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=11.8533ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705589841600',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:08.017587Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=14.1819ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705589780100',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:08.0168201Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=8.038399ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705589740100',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:08.0080287Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=7.6035ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705589594900',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:08.0077234Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=9.2222ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705589537200',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:08.0056624Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=6.5516ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705589044300',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:08.0011109Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=18m50s step=5s duration=2.2942ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705589014800',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:08.0002554Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=6.9927ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705588825400',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.9996894Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=8.4042ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705588796000',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.9988028Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=5.6499ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705588738200',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.9986884Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=4.6483ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705588447000',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.9980009Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=3.9847ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705588321000',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.9978448Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=5.6558ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705588299000',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.9949377Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=18m50s step=5s duration=1.4149ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705588247700',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.9947556Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=18m50s step=5s duration=1.4275ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705588227400',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.9914068Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=11.5294ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705588169000',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.9907907Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=6.7675ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705588086600',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.9895219Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=7.4759ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705588067900',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.9876664Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=10.7623ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705588046800',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.9872568Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=18m50s step=5s duration=1.9358ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705587880100',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.986688Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=4.9318ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705587740400',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.986502Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=6.4876ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705587486200',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.9848043Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=5.2831ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705587470600',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.9837501Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=7.3587ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705587453800',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.9826704Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=18m50s step=5s duration=2.8235ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705587304000',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.977288Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=8.2944ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705587238400',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.9761966Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=8.0031ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705587154200',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.9751202Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=2.8083ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705587064800',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.9747057Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=18m50s step=5s duration=1.6343ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705586994100',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.9731253Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=18m50s step=5s duration=3.0969ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705586961000',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.9716559Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=18m50s step=5s duration=2.0515ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705586923500',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.9708471Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=18m50s step=5s duration=1.8648ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705586906200',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.970411Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=5.3141ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705586691700',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.9696361Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=18m50s step=5s duration=2.4583ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705586674100',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.9672398Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=18m50s step=5s duration=1.5716ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705586590400',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.966178Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=18m50s step=5s duration=1.7183ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705586547100',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.9630529Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=18m50s step=5s duration=2.1282ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705586522200',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.962019Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=5.6047ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705586436900',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.9620011Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=11m5s step=5s duration=5.4316ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705586284500',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.9619357Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=11m5s step=5s duration=6.4158ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705586237900',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.9618242Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=18m50s step=5s duration=1.6873ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705586213800',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.9612246Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=18m50s step=5s duration=1.3402ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705586126200',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.9578511Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=11m5s step=5s duration=5.0998ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705586064300',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.9552883Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=7.6839ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705586021200',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.9548328Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=11.8408ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705586005100',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.9539881Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=11m5s step=5s duration=11.2272ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705585715000',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.9532511Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=7.5285ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705585652200',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.9530451Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=11m5s step=5s duration=7.5352ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705585626700',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.9524677Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=11m5s step=5s duration=3.59ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705585603900',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.9518537Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=11m5s step=5s duration=10.4733ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705585534900',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.951476Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=11m5s step=5s duration=10.1985ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705585458100',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.9504856Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=11m5s step=5s duration=9.0883ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705585325400',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.9457263Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=11m5s step=5s duration=14.2061ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705585283000',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.9370336Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=11m5s step=5s duration=7.3382ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705585265700',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.9317269Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=6.5702ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705585230300',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.9315417Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=11m5s step=5s duration=6.055ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705584989900',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.931157Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=3.8777ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705584973400',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.9309969Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=5.3036ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705584955600',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.9309456Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=4.8808ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705584907100',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.9301652Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=7.962199ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705584880400',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.9297708Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=3.1134ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705584853900',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.9294616Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=11m5s step=5s duration=3.0956ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705584766700',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.923275Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=11m5s step=5s duration=15.8027ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705584712400',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.9222811Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=8.9562ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705584681200',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.9208859Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=13.3339ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705584662200',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.9200232Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=10.8594ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705584643300',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.9179804Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=11m5s step=5s duration=9.3454ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705584621200',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.9164376Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=9.7569ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705584584400',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.9161865Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=8.8968ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705584520800',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.9153385Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=5.5102ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705584374900',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.9138324Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=3.3112ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705584354700',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.9134797Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=11m5s step=5s duration=8.2438ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705584113900',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:07.9099123Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=18m50s step=5s duration=1.9753ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705584089000',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:03.4259266Z caller=metrics.go:92 org_id=fake latency=fast query="sum by (host) (rate({job=\\"mysql\\"}\\n    |= \\"error\\" != \\"timeout\\"\\n    | json\\n    | duration \u003e 10s [1m]))\\n   \\n   " query_type=metric range_type=instant length=0s step=0s duration=30.6664ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705583861100',
            'containers-loki-1           | ts=2022-03-25T11:41:03.4254217Z caller=spanlogger.go:87 org_id=fake Summary.BytesProcessedPerSecond="0 B" Summary.LinesProcessedPerSecond=0 Summary.TotalBytesProcessed="0 B" Summary.TotalLinesProcessed=0 Summary.ExecTime=30.6664ms',
          ],
          [
            '1648210705583814600',
            'containers-loki-1           | ts=2022-03-25T11:41:03.4252846Z caller=spanlogger.go:87 org_id=fake Ingester.TotalReached=16 Ingester.TotalChunksMatched=0 Ingester.TotalBatches=0 Ingester.TotalLinesSent=0 Ingester.HeadChunkBytes="0 B" Ingester.HeadChunkLines=0 Ingester.DecompressedBytes="0 B" Ingester.DecompressedLines=0 Ingester.CompressedBytes="0 B" Ingester.TotalDuplicates=0 Store.TotalChunksRef=0 Store.TotalChunksDownloaded=0 Store.ChunksDownloadTime=0s Store.HeadChunkBytes="0 B" Store.HeadChunkLines=0 Store.DecompressedBytes="0 B" Store.DecompressedLines=0 Store.CompressedBytes="0 B" Store.TotalDuplicates=0',
          ],
          [
            '1648210705583793600',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:03.4236366Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=instant length=0s step=0s duration=4.6272ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705583580000',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:03.4225317Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=instant length=0s step=0s duration=4.6556ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705583560900',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:03.4225223Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=instant length=0s step=0s duration=4.9712ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705583491100',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:03.4198871Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=instant length=0s step=0s duration=4.1154ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705583410100',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:03.4182831Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=instant length=0s step=0s duration=3.805ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705583259700',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:03.4152911Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=instant length=0s step=0s duration=6.3402ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705583240200',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:03.4136339Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=instant length=0s step=0s duration=11.2748ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705583189300',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:03.4113861Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=instant length=0s step=0s duration=8.111699ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705583141600',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:03.4113455Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=instant length=0s step=0s duration=7.5438ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705583105400',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:03.4106595Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=instant length=0s step=0s duration=7.827ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705582929600',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:03.4090655Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=instant length=0s step=0s duration=7.445ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705582881300',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:03.4100386Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=instant length=0s step=0s duration=9.6586ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705582718900',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:03.40937Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=instant length=0s step=0s duration=9.1948ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705582696600',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:03.409327Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=instant length=0s step=0s duration=9.014ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705582559200',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:03.4090544Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=instant length=0s step=0s duration=4.95ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705582528800',
            'containers-loki-1           | level=info ts=2022-03-25T11:41:03.4051803Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=instant length=0s step=0s duration=4.154299ms status=200 limit=1000 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705582505500',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.7290332Z caller=metrics.go:92 org_id=fake latency=fast query="sum by (host) (rate({job=\\"mysql\\"}\\n    |= \\"error\\" != \\"timeout\\"\\n    | json\\n    | duration \u003e 10s [1m]))\\n   \\n   " query_type=metric range_type=range length=3h0m0s step=5s duration=227.648ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705582347700',
            'containers-loki-1           | ts=2022-03-25T11:40:58.7282244Z caller=spanlogger.go:87 org_id=fake Summary.BytesProcessedPerSecond="0 B" Summary.LinesProcessedPerSecond=0 Summary.TotalBytesProcessed="0 B" Summary.TotalLinesProcessed=0 Summary.ExecTime=227.648ms',
          ],
          [
            '1648210705582279300',
            'containers-loki-1           | ts=2022-03-25T11:40:58.727932Z caller=spanlogger.go:87 org_id=fake Ingester.TotalReached=96 Ingester.TotalChunksMatched=0 Ingester.TotalBatches=0 Ingester.TotalLinesSent=0 Ingester.HeadChunkBytes="0 B" Ingester.HeadChunkLines=0 Ingester.DecompressedBytes="0 B" Ingester.DecompressedLines=0 Ingester.CompressedBytes="0 B" Ingester.TotalDuplicates=0 Store.TotalChunksRef=0 Store.TotalChunksDownloaded=0 Store.ChunksDownloadTime=0s Store.HeadChunkBytes="0 B" Store.HeadChunkLines=0 Store.DecompressedBytes="0 B" Store.DecompressedLines=0 Store.CompressedBytes="0 B" Store.TotalDuplicates=0',
          ],
          [
            '1648210705582117500',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.7244908Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=10m55s step=5s duration=11.575ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705582091200',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.7227922Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=10m55s step=5s duration=10.7674ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705581379300',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.721662Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=10m55s step=5s duration=10.2727ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705581273700',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.7215322Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=10m55s step=5s duration=5.5682ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705581245100',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.7203014Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=20.0458ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705581092900',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.7192259Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=10m55s step=5s duration=5.9661ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705580959700',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.719215Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=10m55s step=5s duration=5.0734ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705580726300',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.7187687Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=10m55s step=5s duration=3.3544ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705580706200',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.7182335Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=10m55s step=5s duration=3.3627ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705580634600',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.712558Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=10m55s step=5s duration=11.8093ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705580589400',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.7117639Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=12.4256ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705580368300',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.7113043Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=10m55s step=5s duration=10.0776ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705580325100',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.7081382Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=10.8035ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705580304400',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.7080486Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=10m55s step=5s duration=7.4366ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705579513200',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.7066006Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=5.1248ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705579194800',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.7064644Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=8.1708ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705579168100',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.7057367Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=10.6545ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705579141900',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.7050992Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=6.5708ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705579024400',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.6965645Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=13.2944ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705578983900',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.694143Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=10.8929ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705578956900',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.694143Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=10m55s step=5s duration=8.8885ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705578731700',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.6929555Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=10.095ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705578635600',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.6904395Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=10.2144ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705578596700',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.689551Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=8.2579ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705578519100',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.6828765Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=5.763ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705578481000',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.6807768Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=10m55s step=5s duration=21.9854ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705578414800',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.6797635Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=21.6388ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705578340100',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.6764832Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=18.5328ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705578226800',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.6730982Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=15.635099ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705578202000',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.6717918Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=12.4051ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705578143400',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.6713376Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=10m55s step=5s duration=10.1835ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705578125800',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.6708503Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=8.8692ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705578057700',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.6701495Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=6.4084ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705578040500',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.6667577Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=19.3553ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705578000200',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.6647717Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=10m55s step=5s duration=3.9343ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705577938000',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.659513Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=19m0s step=5s duration=2.2222ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705577880600',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.6528352Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=6.5497ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705577824700',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.6485324Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=3.4387ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705577804200',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.6475876Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=4.0274ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705577684300',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.6462275Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=3.934799ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705577667400',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.6451072Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=19m0s step=5s duration=2.2314ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705577649400',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.6424814Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=19.2428ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705577538400',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.6421088Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=24.5517ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705577516000',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.6415008Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=19.9064ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705577367700',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.641395Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=18.5222ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705577273500',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.6355482Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=12.2555ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705577241600',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.6328483Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=9.3672ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705577085400',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.6309404Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=19m0s step=5s duration=4.5587ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705577039800',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.6303744Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=17.3828ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705576989500',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.6271859Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=8.5164ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705576968300',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.6262272Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=5.7997ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705576951000',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.6216136Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=7.8674ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705576703100',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.618062Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=11.6694ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705576665800',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.6174076Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=12.0629ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705576589100',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.6165039Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=8.276ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705576545000',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.6111089Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=9.3193ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705576398200',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.6148654Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=8.0452ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705576291600',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.614268Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=19m0s step=5s duration=6.6491ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705576140100',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.6111089Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=19m0s step=5s duration=1.8439ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705576078100',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.6104462Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=7.821399ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705575935300',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.6049311Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=19m0s step=5s duration=2.3718ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705575887100',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.6046326Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=11.3473ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705575810000',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.6014265Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=8.5826ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705575781700',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.6007861Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=19m0s step=5s duration=6.6013ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705575742000',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.6001865Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=8.3933ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705575685900',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.5986817Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=12.8823ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705575551200',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.5980572Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=10.3154ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705575093500',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.5954772Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=13.9131ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705575042600',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.5944749Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=5.8615ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705574979100',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.5939978Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=9.329ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705574894500',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.5930781Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=5.8171ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705574713500',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.587524Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=6.0451ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705574684700',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.5859651Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=19m0s step=5s duration=2.697ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705574626300',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.5843824Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=11.2811ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705574555000',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.5835392Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=5.1182ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705574532300',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.5790228Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=3.9758ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705574129900',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.5765871Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=13.8101ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705574033800',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.5745916Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=14.8533ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705573998200',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.5738447Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=13.1002ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705573826100',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.5736881Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=19m0s step=5s duration=2.6988ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705573718800',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.5708669Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=7.8226ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705573684300',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.5690866Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=5.1588ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705573638500',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.5681741Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=19m0s step=5s duration=1.8485ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705573537400',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.5661151Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=19m0s step=5s duration=3.4605ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705573514700',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.562214Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=4.9725ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705573011900',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.5582449Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=4.7411ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705572967900',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.558038Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=5.7731ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705572875600',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.555644Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=4.1418ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705572782900',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.5539043Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=19m0s step=5s duration=2.5838ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705572734000',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.5520159Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=16.1402ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705572695400',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.5511717Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=17.5414ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705572650700',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.54806Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=13.547ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705572581500',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.544569Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=11.2072ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705572536400',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.5435848Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=9.0072ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705572482200',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.5416893Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=19m0s step=5s duration=4.8523ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705572347200',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.5412928Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=12.3699ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705572257300',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.5355561Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=3.5138ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705572168700',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.5350039Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=4.2278ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705572107000',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.5314151Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=19m0s step=5s duration=2.4164ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705572072200',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.5294446Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=19m0s step=5s duration=6.9006ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705571967900',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.5297443Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=8.1363ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705571940800',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.5294345Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=6.9973ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705571905500',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.5278769Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=11.5862ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705571883800',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.5270421Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=10.9674ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705571816100',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.5251766Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=10m55s step=5s duration=9.964ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705571763100',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.5234711Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=5.3321ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705571732100',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.5227021Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=11.9092ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705571709000',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.5211923Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=4.3068ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705571538200',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.5189895Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=8.7286ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705571466200',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.5180338Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=7.2433ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705571444100',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.5170722Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=29m55s step=5s duration=6.2212ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705571289000',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:58.5160416Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(host)(rate({job=\\"mysql\\"} |= \\"error\\" != \\"timeout\\" | json | duration\u003e10s[1m]))" query_type=metric range_type=range length=19m0s step=5s duration=4.9155ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705571230300',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.2770005Z caller=metrics.go:92 org_id=fake latency=fast query="sum by (level) (count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=3h0m0s step=1m0s duration=296.6084ms status=200 limit=1744 returned_lines=0 throughput=803kB total_bytes=238kB',
          ],
          [
            '1648210705571147700',
            'containers-loki-1           | ts=2022-03-25T11:40:53.2762356Z caller=spanlogger.go:87 org_id=fake Summary.BytesProcessedPerSecond="803 kB" Summary.LinesProcessedPerSecond=5242 Summary.TotalBytesProcessed="238 kB" Summary.TotalLinesProcessed=1555 Summary.ExecTime=296.6084ms',
          ],
          [
            '1648210705571079000',
            'containers-loki-1           | ts=2022-03-25T11:40:53.2761534Z caller=spanlogger.go:87 org_id=fake Ingester.TotalReached=96 Ingester.TotalChunksMatched=0 Ingester.TotalBatches=2 Ingester.TotalLinesSent=992 Ingester.HeadChunkBytes="0 B" Ingester.HeadChunkLines=0 Ingester.DecompressedBytes="211 kB" Ingester.DecompressedLines=1367 Ingester.CompressedBytes="49 kB" Ingester.TotalDuplicates=0 Store.TotalChunksRef=2 Store.TotalChunksDownloaded=2 Store.ChunksDownloadTime=1.16ms Store.HeadChunkBytes="0 B" Store.HeadChunkLines=0 Store.DecompressedBytes="27 kB" Store.DecompressedLines=188 Store.CompressedBytes="21 kB" Store.TotalDuplicates=0',
          ],
          [
            '1648210705570967500',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.2742296Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=18.7775ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705570918500',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.2732071Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=20.2942ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705570689000',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.27179Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=17.58ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705570641200',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.2710209Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=11.5368ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705570597700',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.2695213Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=19.2844ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705570567300',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.2605276Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=10.9026ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705570504900',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.2594876Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=10.1318ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705570485200',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.2571295Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=4.8648ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705570342600',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.2563632Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=6.829ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705570290700',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.2507633Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=6.5978ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705570270800',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.2474662Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=4.662ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705570164600',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.2434177Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=36.7764ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705570113400',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.2433542Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=15.1272ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705570081000',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.2421503Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=15.0593ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705570055200',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.2417777Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=21.4443ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705569850500',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.2335531Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=12.1935ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705569815600',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.2328241Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=22.4258ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705569794300',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.2310181Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=19.285ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705569748600',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.221041Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=12.0223ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705569731900',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.2190069Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=19.1566ms status=200 limit=1744 returned_lines=0 throughput=1.4MB total_bytes=27kB',
          ],
          [
            '1648210705569642300',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.2189415Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=16.286499ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705569624200',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.2132301Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=9.0309ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705569576900',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.2118455Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=10.5534ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705569560700',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.2112297Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=12.3344ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705569443500',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.2067489Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=8.3994ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705569374300',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.2022897Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=15.2554ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705569357100',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.2001831Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=12.1157ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705569300200',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.1955646Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=34.5165ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705569254800',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.1955646Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=10m0s step=1m0s duration=33.6196ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705569176100',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.1918722Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=8.5859ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705569148700',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.1899427Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=13.4885ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705569100200',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.1813273Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=7.6493ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705569063300',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.1706836Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=15.4308ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705569038900',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.1695013Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=9.3951ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705568984300',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.1689711Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=14.3642ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705568967400',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.1678749Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=17.6511ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705568930600',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.1636808Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=11.5969ms status=200 limit=1744 returned_lines=0 throughput=1.2MB total_bytes=14kB',
          ],
          [
            '1648210705568909500',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.1629052Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=10m0s step=1m0s duration=7.4339ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705568832000',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.1625075Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=8.0821ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705568773300',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.161717Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=10m0s step=1m0s duration=8.7405ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705568719600',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.154963Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=15.215ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705568685200',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.1528519Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=10m0s step=1m0s duration=7.7752ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705568654100',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.1526368Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=5.4556ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705568610800',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.1506816Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=7.891ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705568535500',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.1455092Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=10m0s step=1m0s duration=18.5444ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705568515900',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.1448155Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=10m0s step=1m0s duration=11.1874ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705568495700',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.1430518Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=15.4063ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705568328400',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.1346484Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=23.4768ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705568297000',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.1334625Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=13.5316ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705568274500',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.1305579Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=10m0s step=1m0s duration=18.0982ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705568119800',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.1305188Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=10m0s step=1m0s duration=13.7652ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705568080300',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.1297269Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=5.1525ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705568030300',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.1284817Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=19m0s step=1m0s duration=2.3719ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705567995600',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.1210325Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=24.0283ms status=200 limit=1744 returned_lines=0 throughput=7.1MB total_bytes=170kB',
          ],
          [
            '1648210705567962100',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.1099911Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=5.8528ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705567923800',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.1064808Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=10m0s step=1m0s duration=5.7365ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705567869800',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.1050915Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=10m0s step=1m0s duration=13.995ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705567840600',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.1052104Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=19m0s step=1m0s duration=2.368ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705567668400',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.1050654Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=10m0s step=1m0s duration=12.9448ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705567638800',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.1036803Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=10m0s step=1m0s duration=5.3816ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705567561700',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.1007195Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=19m0s step=1m0s duration=2.3955ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705567537800',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.1002615Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=19m0s step=1m0s duration=1.9409ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705567314800',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.0960238Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=16.8451ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705567176200',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.0925507Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=22.139ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705567155800',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.0918918Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=13.8112ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705567115000',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.0898249Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=10m0s step=1m0s duration=8.0876ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705567045000',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.0876881Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=10m0s step=1m0s duration=16.761499ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705567003600',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.0847637Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=19m0s step=1m0s duration=4.1669ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705566984700',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.0839375Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=19m0s step=1m0s duration=2.6309ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705566812600',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.0779043Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=6.1603ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705566769000',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.0759846Z caller=metrics.go:92 org_id=fake latency=fast query="{filename=~\\"/var/log/out.log|/var/log/system.log\\"}" query_type=limited range_type=range length=3h0m0s step=5s duration=15.902099ms status=200 limit=1000 returned_lines=992 throughput=12MB total_bytes=184kB',
          ],
          [
            '1648210705566743100',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.0747047Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=10m0s step=1m0s duration=5.4844ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705566689600',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.0727665Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=4.5209ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705566660700',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.0727152Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=19m0s step=1m0s duration=2.6709ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705566613500',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.0710471Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=3.2144ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705566475700',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.066641Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=8.333699ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705566305000',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.0662297Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=19m0s step=1m0s duration=7.5416ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705566263800',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.0642333Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=10m0s step=1m0s duration=4.6847ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705566068600',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.0610569Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=10.255ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705565964300',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.0606399Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=19m0s step=1m0s duration=2.4518ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705565903900',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.0604503Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=11.5835ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705565842200',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.0586186Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=19m0s step=1m0s duration=2.1447ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705565665800',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.0540201Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=19m0s step=1m0s duration=4.361ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705565641200',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.0532702Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=19m0s step=1m0s duration=5.3782ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705565590400',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.0415874Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=19m0s step=1m0s duration=6.8115ms status=200 limit=1744 returned_lines=0 throughput=2.0MB total_bytes=14kB',
          ],
          [
            '1648210705565559200',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.0406997Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=7.736ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705565528300',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.040058Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=9.8824ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705565205100',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.0398473Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=8.611ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705565159600',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.0384986Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=19m0s step=1m0s duration=4.6578ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705565125700',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.0380962Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=5.2623ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705565096300',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.0288188Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=19m0s step=1m0s duration=3.171ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705565055700',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.0299981Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=11.4344ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705564992300',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.0298848Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=10.8637ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705564958400',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.0287835Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=7.7175ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705564934100',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.0229866Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=12.2454ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705564912800',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.0221994Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=7.7703ms status=200 limit=1744 returned_lines=0 throughput=1.7MB total_bytes=14kB',
          ],
          [
            '1648210705564493900',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.0211016Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=10.9673ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705564240100',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.0193868Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=7.2852ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705564208400',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.0179207Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=9.0453ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705564126700',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.017232Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=17.7656ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705564082200',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.0166741Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=3.6798ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705563991100',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.0118592Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=8.6851ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
          [
            '1648210705563928800',
            'containers-loki-1           | level=info ts=2022-03-25T11:40:53.0105142Z caller=metrics.go:92 org_id=fake latency=fast query="sum by(level)(count_over_time({filename=~\\"/var/log/out.log|/var/log/system.log\\"}[1m]))" query_type=metric range_type=range length=29m0s step=1m0s duration=6.1935ms status=200 limit=1744 returned_lines=0 throughput=0B total_bytes=0B',
          ],
        ],
      },
    ],
    stats: {
      summary: {
        bytesProcessedPerSecond: 60964527,
        linesProcessedPerSecond: 170197,
        totalBytesProcessed: 548760,
        totalLinesProcessed: 1532,
        execTime: 0.0090013,
      },
      store: {
        totalChunksRef: 1,
        totalChunksDownloaded: 1,
        chunksDownloadTime: 0.0017713,
        headChunkBytes: 0,
        headChunkLines: 0,
        decompressedBytes: 548760,
        decompressedLines: 1532,
        compressedBytes: 74303,
        totalDuplicates: 0,
      },
      ingester: {
        totalReached: 0,
        totalChunksMatched: 0,
        totalBatches: 0,
        totalLinesSent: 0,
        headChunkBytes: 0,
        headChunkLines: 0,
        decompressedBytes: 0,
        decompressedLines: 0,
        compressedBytes: 0,
        totalDuplicates: 0,
      },
    },
  },
};

export const logsVolumeData = {
  status: 'success',
  data: {
    resultType: 'matrix',
    result: [
      {
        metric: {},
        values: [
          [1648206007.823, '215'],
          [1648206067.823, '10'],
          [1648206127.823, '50'],
          [1648206187.823, '30'],
          [1648206247.823, '20'],
          [1648206307.823, '90'],
          [1648206367.823, '100'],
          [1648206427.823, '40'],
          [1648206487.823, '35'],
          [1648206547.823, '100'],
          [1648206607.823, '10'],
          [1648206667.823, '120'],
          [1648206727.823, '30'],
          [1648206787.823, '69'],
          [1648206847.823, '35'],
          [1648206907.823, '50'],
          [1648206967.823, '93'],
          [1648207027.823, '74'],
          [1648207087.823, '109'],
          [1648207147.823, '30'],
          [1648207207.823, '230'],
          [1648207267.823, '192'],
          [1648207327.823, '0'],
          [1648207387.823, '233'],
          [1648207447.823, '300'],
          [1648207507.823, '20'],
          [1648207567.823, '350'],
          [1648207627.823, '320'],
          [1648207687.823, '120'],
          [1648207747.823, '87'],
        ],
      },
    ],
    stats: {
      summary: {
        bytesProcessedPerSecond: 169626,
        linesProcessedPerSecond: 1037,
        totalBytesProcessed: 35138,
        totalLinesProcessed: 215,
        execTime: 0.2071487,
      },
      store: {
        totalChunksRef: 0,
        totalChunksDownloaded: 0,
        chunksDownloadTime: 0,
        headChunkBytes: 0,
        headChunkLines: 0,
        decompressedBytes: 0,
        decompressedLines: 0,
        compressedBytes: 0,
        totalDuplicates: 0,
      },
      ingester: {
        totalReached: 96,
        totalChunksMatched: 0,
        totalBatches: 1,
        totalLinesSent: 215,
        headChunkBytes: 0,
        headChunkLines: 0,
        decompressedBytes: 35138,
        decompressedLines: 215,
        compressedBytes: 7093,
        totalDuplicates: 0,
      },
    },
  },
};
