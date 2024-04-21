{
  'targets' : [
    {
      "target_name" : "sma_addon",
      "sources" : [ 'main.cpp','market_data.cpp', 'market_data.h', 'moving_avg.cpp' ],
      # "toolsets": ["v141"],
      "include_dirs" : [
        "<!(node -e \"require('nan')\")"
      ]
    }
  ]
}
